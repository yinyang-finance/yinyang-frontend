import Decimal from 'decimal.js'
import { Interface } from 'ethers/lib/utils'
import numeral from 'numeral'
import React from 'react'
import { BiClipboard } from 'react-icons/bi'
import { erc20ABI, useContractReads } from 'wagmi'

import { shortAddress } from '../../../utils'
import { tokens, YANG_DISTRIBUTOR_ADDRESS, YIN_DISTRIBUTOR_ADDRESS } from '../../data'
import { useClipboard } from '../../hooks/useClipboard'
import { useYinYang } from '../../hooks/useYinYang'

export default function StatsContent() {
  const { prices, lockedValue } = useYinYang();
  const { copy } = useClipboard();

  const { data } = useContractReads({
    allowFailure: true,
    contracts: [
      {
        addressOrName: tokens.yin.address,
        contractInterface: new Interface(erc20ABI),
        functionName: "balanceOf",
        args: [YIN_DISTRIBUTOR_ADDRESS],
      },
      {
        addressOrName: tokens.yang.address,
        contractInterface: new Interface(erc20ABI),
        functionName: "balanceOf",
        args: [YANG_DISTRIBUTOR_ADDRESS],
      },
      {
        addressOrName: tokens.yin.address,
        contractInterface: new Interface(erc20ABI),
        functionName: "totalSupply",
      },
      {
        addressOrName: tokens.yang.address,
        contractInterface: new Interface(erc20ABI),
        functionName: "totalSupply",
      },
      {
        addressOrName: tokens.zen.address,
        contractInterface: new Interface(erc20ABI),
        functionName: "totalSupply",
      },
    ],
  });

  const [, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 2000);
  }, []);

  const supplies = {
    [tokens.yin.address]:
      data && data[0] && data[2]
        ? Math.max(
            new Decimal(data[2].toString())
              .sub(new Decimal(data[0].toString()))
              .div(10 ** 18)
              .toNumber(),
            0
          )
        : "???",
    [tokens.yang.address]:
      data && data[1] && data[3]
        ? new Decimal(data[3].toString())
            .sub(new Decimal(data[1].toString()))
            .div(10 ** 18)
            .toNumber()
        : "???",
    [tokens.zen.address]:
      data && data[4]
        ? new Decimal(data[4].toString()).div(10 ** 18).toNumber()
        : "???",
  };

  const marketcaps = {
    [tokens.yin.address]:
      data && data[0] && data[2]
        ? Math.max(
            new Decimal(data[2].toString())
              .sub(new Decimal(data[0].toString()))
              .div(10 ** 18)
              .mul(prices[tokens.yin.address] || 0)
              .toNumber(),
            0
          )
        : "???",
    [tokens.yang.address]:
      data && data[1] && data[3]
        ? new Decimal(data[3].toString())
            .sub(new Decimal(data[1].toString()))
            .div(10 ** 18)
            .mul(prices[tokens.yang.address] || 0)
            .toNumber()
        : "???",
    [tokens.zen.address]:
      data && data[4]
        ? new Decimal(data[4].toString())
            .div(10 ** 18)
            .mul(prices[tokens.zen.address] || 0)
            .toNumber()
        : "???",
  };

  return (
    <section className="flex flex-col justify-center items-center space-y-10 mt-6 p-3">
      <div className="rounded-xl bg-base-200 p-5 flex flex-col">
        <div className="text-4xl opacity-60">Value locked</div>
        <div className="font-bold text-4xl text-center">
          {numeral(
            Object.values(lockedValue).reduce((prev, cur) => prev + cur, 0)
          ).format("aa.aa")}
          $
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {[tokens.yin, tokens.yang, tokens.zen].map((token) => (
          <div className="flex flex-col rounded-xl shadow-xl bg-base-200 gap-2 p-2">
            <div className="flex flex-row p-3 gap-3 pb-0">
              <div>
                <div className="text-xl opacity-60">{token.name}</div>
                <div className="text-3xl font-bold">
                  {prices[token.address]
                    ? numeral(prices[token.address]).format("aa.aaa")
                    : "???"}
                  $
                </div>
                <div className="text-xs opacity-60">
                  Supply: {numeral(supplies[token.address]).format("aa.aaa")}
                </div>
                <div className="text-xs opacity-60">
                  MC: {numeral(marketcaps[token.address]).format("aa.aaa")}$
                </div>
              </div>
              <div className="my-auto">
                <img src={token.logo.src} className="w-10" />
              </div>
            </div>
            <div
              className="opacity-60 text-xs flex justify-between btn btn-ghost btn-sm mt-0 p-2"
              onClick={() => copy(token.address)}
            >
              {shortAddress(token.address)}
              <BiClipboard className="my-auto" />
            </div>
            <a
              className="btn btn-full btn-accent"
              href={`https://swap.defillama.com/?chain=canto&from=${token.address}&to=0x0000000000000000000000000000000000000000`}
            >
              Buy
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
