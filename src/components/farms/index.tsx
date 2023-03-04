import Decimal from "decimal.js";
import { Interface } from "ethers/lib/utils";
import numeral from "numeral";
import { erc20ABI, useContractReads } from "wagmi";

import {
  tokens,
  YANG_DISTRIBUTOR_ADDRESS,
  YIN_DISTRIBUTOR_ADDRESS,
} from "../../data";
import { yangFarms, yinFarms } from "../../data/farms";
import FarmCard from "./farmCard";

export default function FarmsContent() {
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
    ],
  });
  console.log(data);

  const yinEmittedSupply =
    data && data[0] && data[2]
      ? new Decimal(data[2].toString())
          .sub(new Decimal(data[0].toString()))
          .div(new Decimal(data[2].toString()))
          .toNumber()
      : 0;
  const yangEmittedSupply =
    data && data[1] && data[3]
      ? new Decimal(data[3].toString())
          .sub(new Decimal(data[1].toString()))
          .div(new Decimal(data[3].toString()))
          .toNumber()
      : 0;

  console.log(yinEmittedSupply, yangEmittedSupply);

  return (
    <section className="flex flex-col justify-center items-center space-y-10 mt-12 p-3">
      {/* <div className="alert alert-error shadow-lg">
        <div>Pending rewards are bugged</div>
        <BiError className="w-8 h-8" />
      </div> */}
      <p className="text-center font-semibold text-5xl">Farms</p>
      <p className="text-center">
        Farm the initial supply of $YIN and $YANG by depositing tokens in our
        the farms below.
      </p>
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-bold text-center flex flex-row gap-2 mx-auto">
          <img className="w-8 h-8 m-auto" src={tokens.yin.logo.src} />
          <div>Yin farms</div>
        </div>
        <div className="text-center">
          {numeral(yinEmittedSupply).format("aa.a%")} of the supply has been
          emitted
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {yinFarms.map((farm) => (
            <FarmCard key={farm.poolId} farm={farm} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-bold text-center flex flex-row gap-2 mx-auto">
          <img className="w-8 h-8 m-auto" src={tokens.yang.logo.src} />
          <div>Yang farms</div>
        </div>
        <div className="text-center">
          {numeral(yangEmittedSupply).format("aa.a%")} of the supply has been
          emitted
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {yangFarms.map((farm) => (
            <FarmCard key={farm.poolId} farm={farm} />
          ))}
        </div>
      </div>
    </section>
  );
}
