import Decimal from 'decimal.js'
import { Interface } from 'ethers/lib/utils'
import React from 'react'
import { useAccount, useBalance, useContractWrite, usePrepareContractWrite } from 'wagmi'

import IWCantoABI from '../../data/abis/IWCanto.json'
import { tokens } from '../../data/tokens'

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export default function WrappedCantoModal({ isOpen, onClose }: Props) {
  const { address } = useAccount();
  const { data: balanceData, refetch } = useBalance({ addressOrName: address });
  const formattedBalance = balanceData
    ? new Decimal(balanceData.value.toString()).div(10 ** balanceData.decimals)
    : null;
  // const { balanceOf } = useTokenBalance(tokens.wcanto.address);
  const [amount, setAmount] = React.useState<number>(0);
  const { config } = usePrepareContractWrite({
    addressOrName: tokens.wcanto.address,
    contractInterface: new Interface(IWCantoABI.abi),
    functionName: "deposit",
    overrides: { value: new Decimal(amount).mul(10 ** 18).toString() },
  });
  const {
    data,
    status,
    isLoading,
    isSuccess,
    write: deposit,
  } = useContractWrite(config);
  console.log(data, isLoading, isSuccess, balanceData);

  React.useEffect(() => {
    if (status === "success") {
      refetch();
    }
  }, [refetch, status]);

  const handleDeposit = async () => {
    if (!deposit) return;

    deposit();
  };

  console.log(balanceData, formattedBalance?.toString());

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box flex flex-col gap-3">
        <div className="font-primary text-4xl font-bold text-center">
          Wrap Canto
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
              onClick={() =>
                formattedBalance ? setAmount(formattedBalance.toNumber()) : {}
              }
            >
              MAX
            </span>
          </div>
          <div className="text-right">
            Your balance:{" "}
            {formattedBalance ? formattedBalance.toNumber() : "???"} {}
          </div>
        </div>
        <div className="btn-group flex">
          <div className="btn btn-secondary w-3/6" onClick={onClose}>
            Cancel
          </div>
          <div
            className="btn btn-primary w-3/6"
            onClick={() => handleDeposit()}
          >
            Confirm
          </div>
        </div>
      </div>
    </div>
  );
}
