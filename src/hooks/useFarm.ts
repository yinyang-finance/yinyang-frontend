import Decimal from 'decimal.js'
import { Interface, Result } from 'ethers/lib/utils'
import React from 'react'
import { erc20ABI, useAccount, useContractReads } from 'wagmi'

import { NULL_ADDRESS } from '../data'
import distributorABI from '../data/abis/distributor.json'
import { Farm } from '../data/farms'

const getContracts = (farm: Farm, address?: string) => [
  {
    addressOrName: farm.token.address,
    contractInterface: new Interface(erc20ABI),
    functionName: "balanceOf",
    args: [farm.distributor],
  },
  {
    addressOrName: farm.distributor,
    contractInterface: new Interface(distributorABI.abi),
    functionName: "poolInfo",
    args: [farm.poolId],
  },
  {
    addressOrName: farm.distributor,
    contractInterface: new Interface(distributorABI.abi),
    functionName: "userInfo",
    args: [farm.poolId, address || NULL_ADDRESS],
  },
  {
    addressOrName: farm.distributor,
    contractInterface: new Interface(distributorABI.abi),
    functionName: "balanceOf",
    args: [farm.poolId, address || NULL_ADDRESS],
  },
  {
    addressOrName: farm.distributor,
    contractInterface: new Interface(distributorABI.abi),
    functionName: "pendingRewards",
    args: [farm.poolId, address || NULL_ADDRESS],
  },
  {
    addressOrName: farm.token.address,
    contractInterface: new Interface(erc20ABI),
    functionName: "balanceOf",
    args: [address || NULL_ADDRESS],
  },
];

export interface FarmData extends Farm {
  totalDeposited?: number;
  poolInfo?: PoolInfo;
  userInfo?: any;
  userDeposit?: number;
  userRewards?: number;
  userBalance?: number;
  refetch?: () => void;
}
interface PoolInfo {
  token: string;
  allocPoints: number;
  lastRewardBlock: number;
  accumulatedRewardsPerShare: Decimal;
}
const parsePoolInfo = (poolInfo: Result): PoolInfo => {
  return {
    token: poolInfo[0],
    allocPoints: new Decimal(poolInfo[1].toString()).toNumber(),
    lastRewardBlock: new Decimal(poolInfo[2].toNumber()).toNumber(),
    accumulatedRewardsPerShare: new Decimal(poolInfo[3].toString()),
  };
};
const parseUserInfo = (userInfo: Result) => {
  return {
    amount: new Decimal(userInfo[0].toString()),
    rewardDebt: new Decimal(userInfo[1].toString()),
  };
};

export function useFarm(farm: Farm) {
  const { address } = useAccount();
  const contracts = getContracts(farm, address);
  const { data, refetch } = useContractReads({
    allowFailure: true,
    contracts,
  });
  const [farmData, setFarmData] = React.useState<FarmData>(farm);

  const parseFarmData = (): FarmData => {
    if (data && data.filter(Boolean).length === contracts.length) {
      return {
        ...farm,
        refetch,
        totalDeposited: new Decimal(data[0].toString())
          .div(10 ** farm.token.decimals)
          .toNumber(),
        poolInfo: parsePoolInfo(data[1]),
        userInfo: parseUserInfo(data[2]),
        userDeposit: new Decimal(data[3].toString())
          .div(10 ** farm.token.decimals)
          .toNumber(),
        userRewards: new Decimal(data[4].toString())
          .div(10 ** farm.reward.decimals)
          .toNumber(),
        userBalance: new Decimal(data[5].toString())
          .div(10 ** farm.token.decimals)
          .toNearest(0.00000001, Decimal.ROUND_FLOOR)
          .toNumber(),
      };
    }

    return { ...farm, refetch };
  };

  React.useEffect(() => {
    setFarmData(parseFarmData());
  }, [data]);

  React.useEffect(() => {
    const frequency = 5;
    const interval = setInterval(() => {
      if (farmData.poolInfo) {
        setFarmData((base) => {
          const newData = { ...base };
          if (
            base.userDeposit !== undefined &&
            base.userRewards !== undefined &&
            base.totalDeposited &&
            base.poolInfo !== undefined
          ) {
            const userOwnership = base.userDeposit / base.totalDeposited;
            const rewardPerSecond =
              ((10000 / 86400) * farm.multiplier) / farm.totalAllocPoints;

            newData.userRewards =
              (newData?.userRewards || 0) +
              userOwnership * rewardPerSecond * frequency;
          }
          return newData;
        });
      }
    }, frequency * 1000);
    return () => clearInterval(interval);
  }, [farmData]);

  return { farmData };
}
