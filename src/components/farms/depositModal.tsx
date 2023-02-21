import Decimal from 'decimal.js'
import { Interface } from 'ethers/lib/utils'
import React from 'react'
import { toast } from 'react-toastify'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import distributorABI from '../../data/abis/distributor.json'
import { Farm } from '../../data/farms'
import { tokens } from '../../data/tokens'
import useTokenApproval from '../../hooks/useTokenApproval'
import useTokenBalance from '../../hooks/useTokenBalance'
import WrappedCantoModal from './wrapCantoModal'

interface Props {
  farm: Farm;
  isOpen: boolean;
  onClose: (mutated?: boolean) => void;
}
export default function DepositModal({ farm, isOpen, onClose }: Props) {
  const { decimals, balanceOf, refetch } = useTokenBalance(farm.token.address);
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
      new Decimal(amount || 0).mul(10 ** (decimals || 0)).toHex(),
    ],
  });
  const { data, error, status, writeAsync: deposit } = useContractWrite(config);

  const handleDeposit = async () => {
    if (!deposit) return;

    setLoading(true);
    try {
      await deposit();
      refetch();
      onClose(true);
    } catch (err) {
      toast.error(String(err));
    } finally {
      setLoading(false);
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
            />
            <span
              className="btn"
              onClick={() => setAmount(balanceOf?.toNumber())}
            >
              MAX
            </span>
          </div>
          <div className="text-right">
            Your balance:{" "}
            <span className="font-bold">
              {balanceOf ? balanceOf.toString() : "??"} {farm.token.symbol}
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
                  refetch();
                }
              }}
            />
          </>
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
              onClick={() => approve && approve()}
            >
              Approve
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
