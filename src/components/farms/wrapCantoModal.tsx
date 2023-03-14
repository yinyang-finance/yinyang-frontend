import Decimal from "decimal.js";
import { Interface } from "ethers/lib/utils";
import React from "react";
import { toast } from "react-toastify";
import {
  useAccount,
  useBalance,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import IWCantoABI from "../../data/abis/IWCanto.json";
import { tokens } from "../../data/tokens";

interface Props {
  isOpen: boolean;
  onClose: (mutated?: boolean) => void;
}
export default function WrappedCantoModal({ isOpen, onClose }: Props) {
  const { address } = useAccount();
  const { data: balanceData, refetch } = useBalance({ addressOrName: address });
  const formattedBalance = balanceData
    ? new Decimal(balanceData.value.toString()).div(10 ** balanceData.decimals)
    : null;
  // const { balanceOf } = useTokenBalance(tokens.wcanto.address);
  const [amount, setAmount] = React.useState<number>(0);
  const [loading, setLoading] = React.useState(false);
  const { config } = usePrepareContractWrite({
    addressOrName: tokens.wcanto.address,
    contractInterface: new Interface(IWCantoABI.abi),
    functionName: "deposit",
    overrides: { value: new Decimal(amount).mul(10 ** 18).toHex() },
  });
  const { data, writeAsync: deposit } = useContractWrite(config);
  useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      onClose(true);
      refetch();
      toast.success(`Successfully wrapped ${amount} Canto`);
    },
  });

  const handleDeposit = async () => {
    if (!deposit) return;

    setLoading(true);
    try {
      await deposit();
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
          <div
            className="btn btn-secondary w-3/6"
            onClick={() => onClose(false)}
          >
            Cancel
          </div>
          <div
            className={`btn btn-primary w-3/6 ${loading ? "loading" : ""}`}
            onClick={() => handleDeposit()}
          >
            Confirm
          </div>
        </div>
      </div>
    </div>
  );
}
