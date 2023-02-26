import axios from 'axios'
import Decimal from 'decimal.js'
import { Interface } from 'ethers/lib/utils'
import React from 'react'
import { erc20ABI, useContractReads } from 'wagmi'

import { PAIR_YANG_WCANTO_ADDRESS, PAIR_YIN_WCANTO_ADDRESS, PAIR_ZEN_WCANTO_ADDRESS, tokens } from '../data'
import useTemple, { Temple } from '../hooks/useTemple'

interface Prices {
  [key: string]: number;
}
interface YinYangContextProps {
  prices: Prices;
  temple?: Temple;
}
export const YinYangContext = React.createContext<YinYangContextProps>({
  prices: {},
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
      ],
    });
    React.useEffect(() => {
      if (data && prices[tokens.wcanto.address]) {
        const ratio = new Decimal(data[0].toString()).div(
          new Decimal(data[1].toString())
        );
        setPrices((old) => {
          old[token.address] = new Decimal(prices[tokens.wcanto.address] || 0)
            .div(ratio)
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

  const temple = useTemple();

  return (
    <YinYangContext.Provider value={{ prices, temple }}>
      {children}
    </YinYangContext.Provider>
  );
}
