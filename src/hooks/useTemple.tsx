import Decimal from "decimal.js";
import { Interface } from "ethers/lib/utils";
import React from "react";
import { useContractReads } from "wagmi";

import { TEMPLE_ADDRESS, Token, tokens } from "../data";
import templeABI from "../data/abis/Temple.json";

export interface Proposal {
  token: Token;
  voices: number;
  shares: number;
}

const defaultProposals: Proposal[] = [
  { token: tokens.yin, voices: 0, shares: 0 },
  { token: tokens.yang, voices: 0, shares: 0 },
  { token: tokens.zen, voices: 0, shares: 0 },
  { token: tokens.matrix, voices: 0, shares: 0 },
];

export default function useTemple() {
  const { data: dataNumbers, refetch } = useContractReads({
    allowFailure: true,
    contracts: [
      {
        addressOrName: TEMPLE_ADDRESS,
        contractInterface: new Interface(templeABI.abi),
        functionName: "getPropositionsLength",
      },
      {
        addressOrName: TEMPLE_ADDRESS,
        contractInterface: new Interface(templeABI.abi),
        functionName: "getHistoryLength",
      },
      {
        addressOrName: TEMPLE_ADDRESS,
        contractInterface: new Interface(templeABI.abi),
        functionName: "epochStart",
      },
      {
        addressOrName: TEMPLE_ADDRESS,
        contractInterface: new Interface(templeABI.abi),
        functionName: "epochDuration",
      },
    ],
  });
  const numbers = React.useMemo(() => {
    if (dataNumbers) {
      return {
        numberOfPropositions: Number(dataNumbers[0].toString()),
        currentEpoch: Number(dataNumbers[1].toString()),
        epochStart: new Date(Number(dataNumbers[2].toString()) * 1000),
        nextEpoch: new Date(
          (Number(dataNumbers[2].toString()) +
            Number(dataNumbers[3].toString())) *
            1000
        ),
      };
    }
    return {};
  }, [dataNumbers]);

  const { data: dataPropositions } = useContractReads({
    allowFailure: true,
    enabled: !!numbers?.numberOfPropositions,
    contracts: numbers?.numberOfPropositions
      ? Array(numbers?.numberOfPropositions)
          .fill(0)
          .map((e, i) => i)
          .filter((e) => -e > -3)
          .map((_, i) => ({
            addressOrName: TEMPLE_ADDRESS,
            contractInterface: new Interface(templeABI.abi),
            functionName: "getProposition",
            args: [i],
          }))
      : [],
  });

  const proposals = React.useMemo(() => {
    if (dataPropositions) {
      const votedPropositions = dataPropositions
        .map((data) =>
          Object.values(tokens).find((e) => e.address === data[0])
            ? {
                token: Object.values(tokens).find(
                  (e) => e.address === data[0]
                )!,
                voices: new Decimal(data[1].toString())
                  .div(10 ** 18)
                  .toNumber(),
                shares: new Decimal(data[2].toString())
                  .div(10 ** 18)
                  .toNumber(),
              }
            : undefined
        )
        .filter(Boolean);

      return defaultProposals.map(
        (e) =>
          votedPropositions.find((f) => e.token.address === f?.token.address) ||
          e
      );
    }
    return defaultProposals;
  }, [dataPropositions]);

  console.log(dataNumbers, dataPropositions);

  return { proposals, refetch, ...numbers };
}
