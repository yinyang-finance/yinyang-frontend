import Decimal from "decimal.js";
import { Interface } from "ethers/lib/utils";
import React from "react";
import { toast } from "react-toastify";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { YANG_DISTRIBUTOR_ADDRESS } from "../../data";
import distributorABI from "../../data/abis/distributor.json";
import { FarmData } from "../../hooks/useFarm";
import useTokenBalance from "../../hooks/useTokenBalance";

interface Props {
  farm: FarmData;
  deposited?: number;
  isOpen: boolean;
  onClose: (mutated?: boolean) => void;
}
export default function WithdrawModal({
  farm,
  deposited,
  isOpen,
  onClose,
}: Props) {
  const { decimals, refetch } = useTokenBalance(farm.token.address);
  const [loading, setLoading] = React.useState(false);
  const [amount, setAmount] = React.useState<number>();
  const { config } = usePrepareContractWrite({
    addressOrName: YANG_DISTRIBUTOR_ADDRESS,
    contractInterface: new Interface(distributorABI.abi),
    functionName: "withdraw",
    args: [
      farm.poolId,
      new Decimal(amount || 0).mul(10 ** (decimals || 0)).toHex(),
    ],
  });
  const { writeAsync: withdraw, data } = useContractWrite(config);
  useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      refetch();
      onClose(true);
      toast.success(`Successfully withdrew ${amount} ${farm.token.name}`);
    },
  });

  const handleDeposit = async () => {
    if (!withdraw) return;

    setLoading(true);
    try {
      await withdraw();
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
          Withdraw {farm.token.name}
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
            <span className="btn" onClick={() => setAmount(deposited)}>
              MAX
            </span>
          </div>
          <div className="text-right">
            Your balance:{" "}
            <span className="font-bold">
              {deposited} {farm.token.symbol}
            </span>
          </div>
        </div>
        <div className="btn-group flex">
          <div className="btn btn-secondary w-3/6" onClick={() => onClose()}>
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
