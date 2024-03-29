import Decimal from "decimal.js";
import { Interface } from "ethers/lib/utils";
import React from "react";
import { useAccount, useContractReads } from "wagmi";

import { NULL_ADDRESS, TEMPLE_ADDRESS, Token, tokens } from "../data";
import templeABI from "../data/abis/Temple.json";

export interface Proposal {
  token: Token;
  voices: number;
  shares: number;
}
export interface Temple {
  proposals: Proposal[];
  refetch: () => void;
  nextEpoch?: Date;
  numberOfPropositions?: number;
  currentEpoch?: number;
  epochStart?: Date;
  lastUserUpdate?: number;
  pendingShares?: { token: Token; amount: number }[];
  userVoices?: number;
}
const defaultProposals: Proposal[] = [
  // { token: tokens.yin, voices: 0, shares: 0 },
  // { token: tokens.yang, voices: 0, shares: 0 },
  { token: tokens.zen, voices: 0, shares: 0 },
  { token: tokens.wcanto, voices: 0, shares: 0 },
  { token: tokens.note, voices: 0, shares: 0 },
  { token: tokens.flow, voices: 0, shares: 0 },
  { token: tokens.cantoInu, voices: 0, shares: 0 },
  { token: tokens.eth, voices: 0, shares: 0 },
  { token: tokens.cBonk, voices: 0, shares: 0 },
];

export default function useTemple(): Temple {
  const { address } = useAccount();
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
      {
        addressOrName: TEMPLE_ADDRESS,
        contractInterface: new Interface(templeABI.abi),
        functionName: "shares",
      },
      {
        addressOrName: TEMPLE_ADDRESS,
        contractInterface: new Interface(templeABI.abi),
        functionName: "lastUpdate",
        args: [address || NULL_ADDRESS],
      },
      {
        addressOrName: TEMPLE_ADDRESS,
        contractInterface: new Interface(templeABI.abi),
        functionName: "pendingVoterShares",
        args: [address || NULL_ADDRESS],
      },
      {
        addressOrName: TEMPLE_ADDRESS,
        contractInterface: new Interface(templeABI.abi),
        functionName: "getUserVote",
        args: [address || NULL_ADDRESS],
      },
    ],
  });
  const numbers = React.useMemo(() => {
    if (dataNumbers && dataNumbers.filter(Boolean).length >= 6) {
      return {
        numberOfPropositions: dataNumbers[0]
          ? Number(dataNumbers[0].toString())
          : undefined,
        currentEpoch: dataNumbers[1]
          ? Number(dataNumbers[1].toString())
          : undefined,
        epochStart: dataNumbers[2]
          ? new Date(Number(dataNumbers[2].toString()) * 1000)
          : undefined,
        nextEpoch:
          dataNumbers[2] && dataNumbers[3]
            ? new Date(
                (Number(dataNumbers[2].toString()) +
                  Number(dataNumbers[3].toString())) *
                  1000
              )
            : undefined,
        shares: dataNumbers[4]
          ? new Decimal(dataNumbers[4].toString()).div(10 ** 18).toNumber()
          : undefined,
        lastUserUpdate: dataNumbers[5]
          ? Number(dataNumbers[5].toString())
          : undefined,
        pendingShares: dataNumbers[6]
          ? dataNumbers[6].map((e) => ({
              token: Object.values(tokens).find((t) => t.address === e.token)!,
              amount: new Decimal(e.amount.toString())
                .div(10 ** e.decimals)
                .toNumber(),
            }))
          : undefined,
        userVoices:
          dataNumbers[7] && dataNumbers[7][1]
            ? new Decimal(dataNumbers[7][1].toString()).div(10 ** 18).toNumber()
            : 0,
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
          .map((_, i) => i)
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
        .filter(Boolean)
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

      return defaultProposals
        .map(
          (e) =>
            votedPropositions.find(
              (f) => e.token.address === f?.token.address
            ) || e
        )
        .map((e) => {
          e.shares = numbers.shares || 0;
          return e;
        });
    }
    return defaultProposals;
  }, [dataPropositions]);

  return { proposals, refetch, ...numbers };
}
