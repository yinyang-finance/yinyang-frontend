import Decimal from "decimal.js";
import { Interface } from "ethers/lib/utils";
import React from "react";
import { toast } from "react-toastify";
import {
  erc20ABI,
  useAccount,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

import { NULL_ADDRESS, TEMPLE_ADDRESS } from "../../data";
import templeABI from "../../data/abis/Temple.json";
import { tokens } from "../../data/tokens";
import { Proposal } from "../../hooks/useTemple";

interface Props {
  proposal: Proposal;
  isOpen: boolean;
  onClose: (mutated?: boolean) => void;
}
export default function VoteModal({ proposal, isOpen, onClose }: Props) {
  const [loading, setLoading] = React.useState(false);
  const [amount, setAmount] = React.useState<number>();
  const { address } = useAccount();
  const { data } = useContractReads({
    allowFailure: true,
    contracts: [
      {
        addressOrName: tokens.zen.address,
        contractInterface: new Interface(erc20ABI),
        functionName: "balanceOf",
        args: [address || NULL_ADDRESS],
      },
    ],
  });
  const balanceOf = React.useMemo(() => {
    if (data && data[0]) {
      return new Decimal(data[0].toString()).div(10 ** 18).toNumber();
    }
    return 0;
  }, [data]);
  const { config } = usePrepareContractWrite({
    addressOrName: TEMPLE_ADDRESS,
    contractInterface: new Interface(templeABI.abi),
    functionName: "voteForNextTarget",
    args: [
      proposal.token.address || NULL_ADDRESS,
      amount ? new Decimal(amount).mul(10 ** 18).toString() : 0,
    ],
  });
  const { writeAsync: vote } = useContractWrite(config);

  const handleVote = async () => {
    if (!vote) return;

    setLoading(true);
    try {
      await vote();
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
        <div className="font-primary text-4xl font-bold text-center">Vote</div>
        <div className="flex flex-col">
          <div className="input-group">
            <input
              placeholder="Amount..."
              type="number"
              onChange={(e) => setAmount(Number(e.target.value))}
              value={amount}
              className="p-2 rounded w-full"
            />
            <span className="btn" onClick={() => setAmount(balanceOf)}>
              MAX
            </span>
          </div>
          <div className="text-right">
            Your balance:{" "}
            <span className="font-bold">
              {balanceOf} {tokens.zen.symbol}
            </span>
          </div>
        </div>
        <div className="btn-group flex">
          <div className="btn btn-secondary w-3/6" onClick={() => onClose()}>
            Close
          </div>
          <div
            className={`btn btn-primary w-3/6 ${loading ? "loading" : ""}`}
            onClick={() => handleVote()}
          >
            Vote
          </div>
        </div>
      </div>
    </div>
  );
}
