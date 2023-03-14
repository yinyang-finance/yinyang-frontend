import axios from 'axios'
import Decimal from 'decimal.js'
import { Interface } from 'ethers/lib/utils'
import React from 'react'
import { erc20ABI, useContractReads } from 'wagmi'

import {
  PAIR_YANG_WCANTO_ADDRESS,
  PAIR_YIN_WCANTO_ADDRESS,
  PAIR_ZEN_WCANTO_ADDRESS,
  tokens,
  YANG_ADDER_ADDRESS,
  YIN_ADDER_ADDRESS,
} from '../data'
import useTemple, { Temple } from '../hooks/useTemple'

interface Prices {
  [key: string]: number;
}
interface YinYangContextProps {
  prices: Prices;
  lockedValue: Prices;
  temple?: Temple;
}
export const YinYangContext = React.createContext<YinYangContextProps>({
  prices: {},
  lockedValue: {},
});

export default function YinYangProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [prices, setPrices] = React.useState<Prices>({});
  const [lockedValue, setLockedValue] = React.useState<{
    [key: string]: number;
  }>({});
  React.useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=canto&vs_currencies=usd"
      )
      .then((res) =>
        setPrices((old) => {
          old[tokens.wcanto.address] = res.data.canto.usd;
          return old;
        })
      );
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      )
      .then((res) =>
        setPrices((old) => {
          old[tokens.eth.address] = res.data.ethereum.usd;
          return old;
        })
      );
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=cosmos&vs_currencies=usd"
      )
      .then((res) =>
        setPrices((old) => {
          old[tokens.atom.address] = res.data.cosmos.usd;
          return old;
        })
      );
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=canto-inu&vs_currencies=usd"
      )
      .then((res) =>
        setPrices((old) => {
          old[tokens.cantoInu.address] = res.data["canto-inu"].usd;
          return old;
        })
      );
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=canto-shib&vs_currencies=usd"
      )
      .then((res) =>
        setPrices((old) => {
          old[tokens.cantoShib.address] = res.data["canto-shib"].usd;
          return old;
        })
      );
  }, []);

  for (const { token, pair } of [
    { token: tokens.yin, pair: PAIR_YIN_WCANTO_ADDRESS },
    { token: tokens.yang, pair: PAIR_YANG_WCANTO_ADDRESS },
    { token: tokens.zen, pair: PAIR_ZEN_WCANTO_ADDRESS },
  ]) {
    const { data } = useContractReads({
      allowFailure: true,
      contracts: [
        {
          addressOrName: token.address,
          contractInterface: new Interface(erc20ABI),
          functionName: "balanceOf",
          args: [pair],
        },
        {
          addressOrName: tokens.wcanto.address,
          contractInterface: new Interface(erc20ABI),
          functionName: "balanceOf",
          args: [pair],
        },
        {
          addressOrName: pair,
          contractInterface: new Interface(erc20ABI),
          functionName: "totalSupply",
        },
      ],
    });
    React.useEffect(() => {
      if (data && data[0] && data[1] && prices[tokens.wcanto.address]) {
        const ratio = new Decimal(data[0].toString()).div(
          new Decimal(data[1].toString())
        );
        setPrices((old) => {
          old[token.address] = new Decimal(prices[tokens.wcanto.address] || 0)
            .div(ratio)
            .toNumber();
          old[pair] = new Decimal(data[2].toString())
            .div(new Decimal(data[1].toString()))
            .toNumber();
          return old;
        });
        setLockedValue((old) => {
          if (old[token.address] === undefined) old[token.address] = 0;

          old[token.address] += new Decimal(data[1].toString())
            .div(10 ** 18)
            .toNumber();

          return old;
        });
      }
    }, [data, prices[tokens.wcanto.address]]);
  }

  const { data: dataAdders } = useContractReads({
    allowFailure: true,
    contracts: [
      {
        addressOrName: PAIR_YIN_WCANTO_ADDRESS,
        contractInterface: new Interface(erc20ABI),
        functionName: "balanceOf",
        args: [YIN_ADDER_ADDRESS],
      },
      {
        addressOrName: PAIR_YANG_WCANTO_ADDRESS,
        contractInterface: new Interface(erc20ABI),
        functionName: "balanceOf",
        args: [YANG_ADDER_ADDRESS],
      },
    ],
  });
  React.useEffect(() => {
    if (dataAdders && dataAdders[0] && dataAdders[1]) {
      setLockedValue((old) => {
        old[PAIR_YIN_WCANTO_ADDRESS] = new Decimal(dataAdders[0].toString())
          .div(10 ** 18)
          .mul(prices[PAIR_YIN_WCANTO_ADDRESS] || 0)
          .toNumber();
        old[PAIR_YANG_WCANTO_ADDRESS] = new Decimal(dataAdders[1].toString())
          .div(10 ** 18)
          .mul(prices[PAIR_YANG_WCANTO_ADDRESS] || 0)
          .toNumber();
        return old;
      });
    }
  }, [dataAdders]);

  const temple = useTemple();

  return (
    <YinYangContext.Provider value={{ prices, lockedValue, temple }}>
      {children}
    </YinYangContext.Provider>
  );
}
