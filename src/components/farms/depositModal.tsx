import Decimal from 'decimal.js'
import { Interface } from 'ethers/lib/utils'
import React from 'react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import { Farm } from '.'
import { YIN_DISTRIBUTOR } from '../../data'
import yinDistributorABI from '../../data/abis/distributor.json'
import { tokens } from '../../data/tokens'
import useTokenApproval from '../../hooks/useTokenApproval'
import useTokenBalance from '../../hooks/useTokenBalance'
import WrappedCantoModal from './wrapCantoModal'

interface Props {
  farm: Farm;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}
export default function DepositModal({
  farm,
  isOpen,
  onClose,
  onSuccess = () => {},
}: Props) {
  const { decimals, balanceOf, status, refetch } = useTokenBalance(
    farm.token.address
  );
  const { allowance, approve, isApproving } = useTokenApproval(
    farm.token.address,
    farm.distributor
  );
  const [amount, setAmount] = React.useState<number>();
  const [openWrap, setOpenWrap] = React.useState(false);
  const { config } = usePrepareContractWrite({
    addressOrName: YIN_DISTRIBUTOR,
    contractInterface: new Interface(yinDistributorABI.abi),
    functionName: "deposit",
    args: [
      farm.poolId,
      new Decimal(amount || 0).mul(10 ** (decimals || 0)).toString(),
    ],
  });
  const {
    data,
    isLoading,
    isSuccess,
    write: deposit,
  } = useContractWrite(config);
  console.log(deposit, data, isLoading, isSuccess, allowance);

  React.useEffect(() => {
    if (status === "success") {
      refetch();
      onSuccess();
    }
  }, [status, refetch]);

  const handleDeposit = async () => {
    if (!deposit) return;

    console.log([
      farm.poolId,
      new Decimal(amount || 0).mul(10 ** (decimals || 0)),
    ]);

    deposit();
  };

  console.log(allowance, approve);

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
              onClose={() => setOpenWrap(false)}
            />
          </>
        ) : null}
        <div className="btn-group flex">
          <div className="btn btn-secondary w-3/6" onClick={onClose}>
            Cancel
          </div>
          {!allowance || allowance.eq(0) ? (
            <div
              className={`btn btn-primary w-3/6 ${
                isApproving ? "btn-loading" : ""
              }`}
              onClick={() => approve && approve()}
            >
              Approve
            </div>
          ) : (
            <div
              className={`btn btn-primary w-3/6`}
              onClick={() => handleDeposit()}
            >
              Confirm
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
