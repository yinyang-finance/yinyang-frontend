import Decimal from 'decimal.js'
import { Interface } from 'ethers/lib/utils'
import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { erc20ABI, useAccount, useBlockNumber, useContractReads } from 'wagmi'

import { EXPLORER_URL, REWARDS_PER_BLOCK } from '../../data'
import distributorABI from '../../data/abis/distributor.json'
import { Farm } from '../../data/farms'
import DepositModal from './depositModal'
import WithdrawModal from './withdrawModal'

interface Props {
  farm: Farm;
}
export default function FarmCard({ farm }: Props) {
  const { address } = useAccount();
  const { data: blockNumberData } = useBlockNumber();
  const { data, refetch } = useContractReads({
    allowFailure: true,
    contracts: [
      {
        addressOrName: farm.distributor,
        contractInterface: new Interface(distributorABI.abi),
        functionName: "balanceOf",
        args: [farm.poolId, address],
      },
      {
        addressOrName: farm.distributor,
        contractInterface: new Interface(distributorABI.abi),
        functionName: "pendingRewards",
        args: [farm.poolId, address],
      },
      {
        addressOrName: farm.distributor,
        contractInterface: new Interface(distributorABI.abi),
        functionName: "userInfo",
        args: [farm.poolId, address],
      },
      {
        addressOrName: farm.distributor,
        contractInterface: new Interface(distributorABI.abi),
        functionName: "poolInfo",
        args: [farm.poolId],
      },
      {
        addressOrName: farm.token.address,
        contractInterface: new Interface(erc20ABI),
        functionName: "balanceOf",
        args: [farm.distributor],
      },
    ],
  });
  const balanceOf =
    data && data[0]
      ? new Decimal(data[0].toString()).div(10 ** 18).toNumber()
      : 0;
  const pendingRewards =
    data && data[1]
      ? new Decimal(data[1].toString()).div(10 ** 18).toNumber()
      : 0;
  const userInfo =
    data && data[2]
      ? {
          rewardDebt: new Decimal(data[2].rewardDebt.toString()),
          amount: new Decimal(data[2].amount.toString()),
        }
      : undefined;
  const poolInfo =
    data && data[3]
      ? {
          allocPoint: new Decimal(data[3].allocPoint.toString()),
          lastRewardBlock: new Decimal(data[3].lastRewardBlock.toString()),
          accRewardsPerShare: new Decimal(
            data[3].accRewardsPerShare.toString()
          ),
        }
      : undefined;
  const poolBalance = data && data[4] ? new Decimal(data[4].toString()) : 0;

  const computeRewards = () => {
    if (poolInfo && userInfo && blockNumberData && poolBalance) {
      const block = new Decimal(blockNumberData.toString() || 0);
      let accRewardsPerShare = poolInfo.accRewardsPerShare;
      if (block >= poolInfo.lastRewardBlock) {
        const multiplier = block.sub(poolInfo.lastRewardBlock);
        const r = multiplier
          .times(REWARDS_PER_BLOCK)
          .times(poolInfo.allocPoint)
          .div(farm.totalAllocPoints);
        accRewardsPerShare = accRewardsPerShare.add(
          r.mul(1e12).div(poolBalance)
        );
      }
      return userInfo.amount
        .times(accRewardsPerShare)
        .div(1e12)
        .sub(userInfo.rewardDebt)
        .div(10 ** 18)
        .toNumber();
    }

    return 0;
  };
  const [computedRewards, setComputedRewards] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => setComputedRewards(computeRewards()), 5);
    return () => clearInterval(interval);
  }, [poolInfo, poolBalance, userInfo, blockNumberData]);

  const [openDeposit, setOpenDeposit] = React.useState(false);
  const [openWithdraw, setOpenWithdraw] = React.useState(false);
  console.log(
    farm.token.name,
    balanceOf,
    pendingRewards,
    userInfo,
    poolInfo,
    poolBalance.toString(),
    computedRewards,
    blockNumberData?.toString(),
    poolInfo?.lastRewardBlock.toString(),
    data
  );

  return (
    <div className="bg-base-300 p-2 rounded-xl shadow-xl w-fit flex flex-col gap-3">
      <DepositModal
        farm={farm}
        isOpen={openDeposit}
        onClose={(mutated) => {
          setOpenDeposit(false);

          if (mutated) {
            refetch();
          }
        }}
      />
      <WithdrawModal
        farm={farm}
        deposited={balanceOf}
        isOpen={openWithdraw}
        onClose={(mutated) => {
          setOpenWithdraw(false);

          if (mutated) {
            refetch();
          }
        }}
      />
      <div className="text-2xl font-bold text-center m-auto flex flex-row gap-2">
        {farm.token.name}
        <Link href={`${EXPLORER_URL}${farm.token.address}`}>
          <FaExternalLinkAlt className="my-auto" />
        </Link>
      </div>
      <div className="flex flex-row justify-between">
        <div className="">Multiplier</div>
        <div className="font-bold">x{farm.multiplier}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="">Deposited</div>
        <div className="font-bold">{balanceOf}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="">Pending</div>
        <div className="font-bold">{computedRewards.toFixed(2)}</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="btn btn-neutral w-full">Collect</div>
        <div className="btn-group">
          <div
            className="btn btn-secondary w-3/6"
            onClick={() => setOpenWithdraw(true)}
          >
            Withdraw
          </div>
          <div
            className="btn btn-primary w-3/6"
            onClick={() => setOpenDeposit(true)}
          >
            Deposit
          </div>
        </div>
      </div>
    </div>
  );
}
