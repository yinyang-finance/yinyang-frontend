import { Interface } from 'ethers/lib/utils'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import { EXPLORER_URL } from '../../data'
import distributorABI from '../../data/abis/distributor.json'
import { Farm } from '../../data/farms'
import { useFarm } from '../../hooks/useFarm'
import DepositModal from './depositModal'
import WithdrawModal from './withdrawModal'

interface Props {
  farm: Farm;
}
export default function FarmCard({ farm }: Props) {
  const { farmData } = useFarm(farm);
  const { config } = usePrepareContractWrite({
    suspense: true,
    addressOrName: farm.distributor,
    contractInterface: new Interface(distributorABI.abi),
    functionName: "withdraw",
    args: [farm.poolId, 0],
  });
  const { writeAsync: collect } = useContractWrite(config);
  const [loading, setLoading] = React.useState(false);
  const [openDeposit, setOpenDeposit] = React.useState(false);
  const [openWithdraw, setOpenWithdraw] = React.useState(false);

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

  return (
    <div className="bg-base-200 p-2 rounded-xl shadow-xl w-fit flex flex-col gap-3">
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
      <div className="text-2xl font-bold text-center m-auto flex flex-col">
        <div className="my-auto">{farm.token.name}</div>
        <a
          className="mx-auto"
          target="__blank"
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
          <div className="">Multiplier</div>
          <div className="font-bold">x{farm.multiplier}</div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="">Deposited</div>
          <div className="font-bold">
            {farmData.userDeposit?.toString() || "???"}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="">Pending</div>
          <div className="font-bold">
            {farmData.userRewards?.toFixed(2) || "??"}
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
  );
}
