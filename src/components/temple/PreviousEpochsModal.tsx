import Decimal from "decimal.js";
import { Interface } from "ethers/lib/utils";
import numeral from "numeral";
import React from "react";
import { useAccount, useContractReads } from "wagmi";

import { TEMPLE_ADDRESS, Token, tokens } from "../../data";
import templeABI from "../../data/abis/Temple.json";
import { useYinYang } from "../../hooks/useYinYang";

export interface Proposition {
  startTime: Date;
  votedToken: Token;
  voices: number;
  shares: number;
}

interface Props {
  isOpen: boolean;
  onClose: (mutated?: boolean) => void;
}
export default function PreviousEpochModal({ isOpen, onClose }: Props) {
  const { temple } = useYinYang();
  const [loading, setLoading] = React.useState(false);
  const [amount, setAmount] = React.useState<number>();
  const { address } = useAccount();
  const { data } = useContractReads({
    allowFailure: true,
    contracts: temple?.currentEpoch
      ? Array(temple.currentEpoch)
          .fill(0)
          .map((_, i) => ({
            addressOrName: TEMPLE_ADDRESS,
            contractInterface: new Interface(templeABI.abi),
            functionName: "getHistory",
            args: [i],
          }))
      : [],
  });

  const propositions = React.useMemo(() => {
    const processedData: Proposition[] = [];
    if (data) {
      for (const d of data.filter(Boolean)) {
        processedData.push({
          startTime: new Date(Number(d[0].toString()) * 1000),
          votedToken: Object.values(tokens).find(
            (e) => e.address === d[1].toString()
          )!,
          voices: new Decimal(d[2].toString()).div(10 ** 18).toNumber(),
          shares: new Decimal(d[3].toString()).div(10 ** 18).toNumber(),
        });
      }
    }
    return processedData;
  }, [data]);

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box flex flex-col gap-3">
        <div className="font-primary text-4xl font-bold text-center">
          History
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Epoch</th>
              <th>Result</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {propositions.map((proposition, i) => (
              <tr key={`${proposition.votedToken}-${i}`}>
                <th>{i + 1}</th>
                <th>
                  <div className="flex justify-between">
                    <div className="my-auto">{proposition.votedToken.name}</div>
                    <div>
                      <img
                        className="w-8 h-8"
                        src={proposition.votedToken.logo.src}
                      />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col">
                    <div className="">
                      {numeral(proposition.voices / proposition.shares).format(
                        "aa.a%"
                      )}
                    </div>
                    <div className="text-xs opacity-60">
                      {numeral(proposition.shares).format("aa.a")} total votes
                    </div>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btn-group flex">
          <div className="btn btn-secondary w-full" onClick={() => onClose()}>
            Close
          </div>
        </div>
      </div>
    </div>
  );
}
