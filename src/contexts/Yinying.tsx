import axios from 'axios'
import Decimal from 'decimal.js'
import { Interface } from 'ethers/lib/utils'
import React from 'react'
import { erc20ABI, useContractReads } from 'wagmi'

import { PAIR_YANG_WCANTO_ADDRESS, PAIR_YIN_WCANTO_ADDRESS, PAIR_ZEN_WCANTO_ADDRESS, tokens } from '../data'

interface Prices {
  [key: string]: number;
}
interface YinYangContextProps {
  prices: Prices;
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
          old.wcanto = res.data.canto.usd;
          return old;
        })
      );
  }, []);

  const t = {
    yin: { token: tokens.yin, pair: PAIR_YIN_WCANTO_ADDRESS },
    yang: { token: tokens.yang, pair: PAIR_YANG_WCANTO_ADDRESS },
    zen: { token: tokens.zen, pair: PAIR_ZEN_WCANTO_ADDRESS },
  };
  for (const [k, v] of Object.entries(t)) {
    const { data } = useContractReads({
      allowFailure: true,
      contracts: [
        {
          addressOrName: v.token.address,
          contractInterface: new Interface(erc20ABI),
          functionName: "balanceOf",
          args: [v.pair],
        },
        {
          addressOrName: tokens.wcanto.address,
          contractInterface: new Interface(erc20ABI),
          functionName: "balanceOf",
          args: [v.pair],
        },
      ],
    });
    React.useEffect(() => {
      if (data && prices.wcanto) {
        const ratio = new Decimal(data[0].toString()).div(
          new Decimal(data[1].toString())
        );
        setPrices((old) => {
          old[k] = new Decimal(prices.wcanto || 0).div(ratio).toNumber();
          return old;
        });
        setLockedValue((old) => {
          if (old[k] === undefined) old[k] = 0;

          old[k] += new Decimal(data[1].toString()).div(10 ** 18).toNumber();

          return old;
        });
      }
    }, [data, prices.wcanto]);
  }

  console.log(prices);

  return (
    <YinYangContext.Provider value={{ prices }}>
      {children}
    </YinYangContext.Provider>
  );
}
