import Decimal from 'decimal.js'
import { Interface } from 'ethers/lib/utils'
import numeral from 'numeral'
import React from 'react'
import { FaExternalLinkAlt, FaQuestionCircle } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'

import { EXPLORER_URL, REWARDS_PER_BLOCK } from '../../data'
import distributorABI from '../../data/abis/distributor.json'
import { Farm } from '../../data/farms'
import { useFarm } from '../../hooks/useFarm'
import { useYinYang } from '../../hooks/useYinYang'
import ErrorBoundary from '../common/ErrorBoundary'
import DepositModal from './depositModal'
import { DetailsModal } from './detailsModal'
import WithdrawModal from './withdrawModal'

interface Props {
  farm: Farm;
}
export default function FarmCard({ farm }: Props) {
  const { prices } = useYinYang();
  const { farmData } = useFarm(farm);
  const { config } = usePrepareContractWrite({
    addressOrName: farm.distributor,
    contractInterface: new Interface(distributorABI.abi),
    functionName: "withdraw",
    args: [farm.poolId, 0],
  });
  const { writeAsync: collect, data } = useContractWrite(config);
  useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      toast.success(`Successfully collected ${farm.reward.name}`);
    },
  });

  const [loading, setLoading] = React.useState(false);
  const [openDeposit, setOpenDeposit] = React.useState(false);
  const [openWithdraw, setOpenWithdraw] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);

  const handleCollect = async () => {
    if (!collect) return;

    setLoading(true);
    try {
      await collect();
    } catch (err) {
      toast.error(String(err));
    } finally {
      setLoading(false);
    }
  };

  const depositPrice = farmData.lpTokens
    ? (prices[farmData.lpTokens[0].address] +
        prices[farmData.lpTokens[1].address]) /
      2
    : prices[farm.token.address];
  const rewardPrice = prices[farm.reward.address] || 0;
  const rewardPerYear = REWARDS_PER_BLOCK.div(10 ** 18)
    .mul(5256000)
    .mul(farm.multiplier)
    .div(farm.totalAllocPoints);
  const totalRewardPricePerYear = new Decimal(rewardPrice).mul(rewardPerYear);
  const totalStakingTokenInPool = new Decimal(depositPrice || 0).times(
    farmData.totalDeposited || 0
  );
  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100);

  return (
    <ErrorBoundary>
      <div className="bg-base-200 p-2 rounded-xl shadow-xl w-fit flex flex-col gap-3">
        {openDeposit ? (
          <DepositModal
            farm={farmData}
            isOpen={openDeposit}
            onClose={(mutated) => {
              setOpenDeposit(false);

              if (mutated && farmData.refetch) {
                farmData.refetch();
              }
            }}
          />
        ) : null}
        {openWithdraw ? (
          <WithdrawModal
            farm={farmData}
            deposited={farmData.userDeposit}
            isOpen={openWithdraw}
            onClose={(mutated) => {
              setOpenWithdraw(false);

              if (mutated && farmData.refetch) {
                farmData.refetch();
              }
            }}
          />
        ) : null}
        <div className="text-2xl font-bold text-center m-auto flex flex-col w-full">
          <div className="absolute" onClick={() => setOpenInfo(true)}>
            <FaQuestionCircle className="left-0" />
          </div>
          <DetailsModal
            farmData={farmData}
            isOpen={openInfo}
            onClose={() => setOpenInfo(false)}
          />
          {farm.lpTokens ? (
            <div className="flex flex-row gap-2 mx-auto p-2">
              <img className="w-12" src={farm.lpTokens[0].logo.src}></img>
              <img className="w-12" src={farm.lpTokens[1].logo.src}></img>
            </div>
          ) : (
            <div className="flex flex-row mx-auto p-2">
              <img className="w-12" src={farm.token.logo.src}></img>
            </div>
          )}
          <div className="my-auto">{farm.token.name}</div>
          {farm.depositFee ? (
            <div className="text-xs my-auto">
              {farm.depositFee}% deposit fee
            </div>
          ) : null}
          <a
            className="mx-auto"
            target="_blank"
            href={`${EXPLORER_URL}${farm.token.address}`}
          >
            <div className="text-center text-xs underline flex gap-2 mx-auto">
              <div className="my-auto">See on explorer</div>
              <FaExternalLinkAlt className="h-4 w-4 my-auto" />
            </div>
          </a>
        </div>
        <div className="flex flex-col gap-1 bg-base-300 p-2 rounded">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-center gap-1">
              <div>APR</div>
            </div>
            <div className="font-bold">
              {numeral(apr.toNumber()).format("aa.aa%")}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="">Total deposited</div>
            <div className="font-bold flex flex-row gap-1">
              {farmData.totalDeposited
                ? numeral(farmData.totalDeposited).format("aaa.aa")
                : "???"}
              {farm.lpTokens ? (
                <>
                  <img
                    className="w-4 h-4 my-auto"
                    src={farm.lpTokens[0].logo.src}
                  />
                  <img
                    className="w-4 h-4 my-auto"
                    src={farm.lpTokens[1].logo.src}
                  />
                </>
              ) : (
                <img className="w-4 h-4 my-auto" src={farm.token.logo.src} />
              )}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="">User deposit</div>
            <div className="font-bold flex flex-row gap-1">
              {farmData.userDeposit
                ? numeral(farmData.userDeposit).format("aaa.aa")
                : "???"}
              {farm.lpTokens ? (
                <>
                  <img
                    className="w-4 h-4 my-auto"
                    src={farm.lpTokens[0].logo.src}
                  />
                  <img
                    className="w-4 h-4 my-auto"
                    src={farm.lpTokens[1].logo.src}
                  />
                </>
              ) : (
                <img className="w-4 h-4 my-auto" src={farm.token.logo.src} />
              )}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="">Pending</div>
            <div className="font-bold flex flex-row gap-1">
              <div>
                {farmData.userRewards
                  ? numeral(farmData.userRewards).format("aaa.aa")
                  : "??"}
              </div>
              <img className="w-4 h-4 my-auto" src={farm.reward.logo.src} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="btn-group">
            <div
              className={`btn btn-accent w-2/6 ${loading ? "loading" : ""}`}
              onClick={handleCollect}
            >
              Collect
            </div>
            <div
              className="btn btn-secondary w-2/6"
              onClick={() => setOpenWithdraw(true)}
            >
              Withdraw
            </div>
            <div
              className="btn btn-primary w-2/6"
              onClick={() => setOpenDeposit(true)}
            >
              Deposit
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
