import Decimal from 'decimal.js'
import { Interface } from 'ethers/lib/utils'
import numeral from 'numeral'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'

import distributorABI from '../../data/abis/distributor.json'
import { tokens } from '../../data/tokens'
import { FarmData } from '../../hooks/useFarm'
import useTokenApproval from '../../hooks/useTokenApproval'
import WrappedCantoModal from './wrapCantoModal'

interface Props {
  farm: FarmData;
  isOpen: boolean;
  onClose: (mutated?: boolean) => void;
}
export default function DepositModal({ farm, isOpen, onClose }: Props) {
  const { allowance, approve, isApproving } = useTokenApproval(
    farm.token.address,
    farm.distributor
  );
  const [loading, setLoading] = React.useState(false);
  const [amount, setAmount] = React.useState<number>();
  const [openWrap, setOpenWrap] = React.useState(false);
  const { config } = usePrepareContractWrite({
    addressOrName: farm.distributor,
    contractInterface: new Interface(distributorABI.abi),
    functionName: "deposit",
    args: [
      farm.poolId,
      new Decimal(amount || 0).mul(10 ** (farm.token.decimals || 0)).toHex(),
    ],
  });
  const { writeAsync: deposit, data } = useContractWrite(config);
  useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      onClose(true);
      toast.success(`Successfully deposited ${amount} ${farm.token.name}`);
    },
  });

  const handleDeposit = React.useCallback(async () => {
    if (!deposit) return;

    setLoading(true);
    try {
      await deposit();
    } catch (err) {
      toast.error(String(err));
    } finally {
      setLoading(false);
    }
  }, [deposit]);

  const handleApprove = async () => {
    if (!approve) return;

    try {
      await approve();
      farm.refetch && farm.refetch();
    } catch (err) {
      toast.error(String(err));
    }
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box flex flex-col gap-3">
        <div className="font-primary text-4xl font-bold text-center">
          Deposit {farm.token.name}
        </div>
        <div className="flex flex-col">
          <div className="input-group">
            <input
              placeholder="Amount..."
              type="number"
              onChange={(e) => setAmount(Number(e.target.value))}
              value={amount}
              className="p-2 rounded w-full"
              disabled={!allowance || allowance.eq(0)}
            />
            <span className="btn" onClick={() => setAmount(farm.userBalance)}>
              MAX
            </span>
          </div>
          <div className="text-right">
            Your balance:{" "}
            <span className="font-bold">
              {farm.userBalance !== undefined
                ? numeral(farm.userBalance).format("aaa.aa")
                : "??"}{" "}
              {farm.token.symbol}
            </span>
          </div>
        </div>
        {farm.token === tokens.wcanto ? (
          <>
            <div className="btn mx-auto" onClick={() => setOpenWrap(true)}>
              Wrap Canto
            </div>
            <WrappedCantoModal
              isOpen={openWrap}
              onClose={(mutated) => {
                setOpenWrap(false);
                if (mutated) {
                  farm.refetch && farm.refetch();
                }
              }}
            />
          </>
        ) : null}
        {farm.lpTokens !== undefined ? (
          <a
            href={`https://velocimeter.xyz/liquidity/${farm.token.address}`}
            target="__blank"
            className="mx-auto"
          >
            <div className="btn flex flex-row gap-2">
              <div className="my-auto">Add liquidity</div>
              <FaExternalLinkAlt className="h-4 w-4 my-auto" />
            </div>
          </a>
        ) : null}
        <div className="btn-group flex">
          <div className="btn btn-secondary w-3/6" onClick={() => onClose()}>
            Cancel
          </div>
          {allowance && allowance.gt(0) ? (
            <div
              className={`btn btn-primary w-3/6 ${loading ? "loading" : ""}`}
              onClick={() => handleDeposit()}
            >
              Confirm
            </div>
          ) : (
            <div
              className={`btn btn-accent w-3/6 ${
                isApproving ? "btn-loading" : ""
              }`}
              onClick={handleApprove}
            >
              Approve
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
