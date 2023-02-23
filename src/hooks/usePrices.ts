import Decimal from 'decimal.js'
import { Interface, Result } from 'ethers/lib/utils'
import React from 'react'
import { erc20ABI, useContractReads } from 'wagmi'

import {
  PAIR_YANG_WCANTO_ADDRESS,
  PAIR_YIN_NOTE_ADDRESS,
  PAIR_ZEN_NOTE_ADDRESS,
  PAIR_ZEN_WCANTO_ADDRESS,
  tokens,
} from '../data'
import cantoSwapPairABI from '../data/abis/CantoSwapPair.json'
import pairABI from '../data/abis/IBaseV1Pair.json'

const getContracts = () => [
  {
    addressOrName: "0x1D20635535307208919f0b67c3B2065965A85aA9", // Canto Note
    contractInterface: new Interface(pairABI.abi),
    functionName: "metadata",
    args: [],
  },
  {
    addressOrName: tokens.yin.address,
    contractInterface: new Interface(erc20ABI),
    functionName: "balanceOf",
    args: [PAIR_YIN_NOTE_ADDRESS],
  },
  {
    addressOrName: tokens.note.address,
    contractInterface: new Interface(erc20ABI),
    functionName: "balanceOf",
    args: [PAIR_YIN_NOTE_ADDRESS],
  },
  {
    addressOrName: PAIR_YANG_WCANTO_ADDRESS,
    contractInterface: new Interface(cantoSwapPairABI.abi),
    functionName: "token0",
    args: [],
  },
  {
    addressOrName: PAIR_YANG_WCANTO_ADDRESS,
    contractInterface: new Interface(cantoSwapPairABI.abi),
    functionName: "price0CumulativeLast",
    args: [],
  },
  {
    addressOrName: PAIR_ZEN_NOTE_ADDRESS,
    contractInterface: new Interface(cantoSwapPairABI.abi),
    functionName: "token0",
    args: [],
  },
  {
    addressOrName: PAIR_ZEN_NOTE_ADDRESS,
    contractInterface: new Interface(cantoSwapPairABI.abi),
    functionName: "price0CumulativeLast",
    args: [],
  },
  {
    addressOrName: PAIR_ZEN_WCANTO_ADDRESS,
    contractInterface: new Interface(cantoSwapPairABI.abi),
    functionName: "token0",
    args: [],
  },
  {
    addressOrName: PAIR_ZEN_WCANTO_ADDRESS,
    contractInterface: new Interface(cantoSwapPairABI.abi),
    functionName: "price0CumulativeLast",
    args: [],
  },
];

export interface Prices {
  canto: number;
  note: number;
  yin: number;
  yang: number;
  zen: number;
}

export function usePrices() {
  const contracts = getContracts();
  const { data, status, refetch } = useContractReads({
    allowFailure: true,
    contracts,
  });
  const [prices, setPrices] = React.useState<Prices>();

  const parsePricesData = (): Prices | undefined => {
    if (data && data.filter(Boolean).length === contracts.length) {
      // const [decimal0, decimal1, reserve0, reserve1, stable, token0, token1] = data[0]

      const priceFromMetadata = (
        metadata: Result,
        token0: string,
        quote: number
      ) => {
        if (metadata[2].toString() === "0" || metadata[3].toString() === "0")
          return 0;

        const price = new Decimal(metadata[2].toString())
          .div(
            new Decimal(metadata[0].toString()).div(
              new Decimal(metadata[1].toString())
            )
          )
          .div(new Decimal(metadata[3].toString()))
          .toNumber();

        return metadata[5] !== token0 ? price / quote : quote / price;
      };

      const priceFromBalances = (
        balanceTarget: Result,
        balanceQuote: Result
      ) => {
        if (balanceTarget.toString() === "0" || balanceQuote.toString() === "0")
          return 0;
        return new Decimal(balanceTarget.toString())
          .div(new Decimal(balanceQuote.toString()))
          .toNumber();
      };

      console.log(data);
      let yin: number,
        yang: number,
        zen: number,
        canto: number,
        note = 1;
      // TODO: !Suppose NOTE = 1$
      canto = priceFromMetadata(data[0], tokens.wcanto.address, 1);
      console.log(data);

      yin = priceFromBalances(data[1], data[2]);
      yang = priceFromBalances(data[1], data[2]);
      zen = priceFromBalances(data[1], data[2]);
      // yang = priceFromPriceCumulative(
      //   tokens.yang.address,
      //   data[3],
      //   data[4]
      // ).toNumber();
      // zen = priceFromPriceCumulative(
      //   tokens.zen.address,
      //   data[5],
      //   data[6]
      // ).toNumber();

      return {
        yin,
        yang,
        zen,
        canto,
        note,
      };
    }
  };

  React.useEffect(() => {
    setPrices(parsePricesData());
  }, [data]);

  return { prices, refetch };
}
