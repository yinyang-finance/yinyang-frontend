import { Interface } from 'ethers/lib/utils'
import numeral from 'numeral'
import React from 'react'
import { toast } from 'react-toastify'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'

import { TEMPLE_ADDRESS, tokens } from '../../data'
import templeABI from '../../data/abis/Temple.json'
import useTokenBalance from '../../hooks/useTokenBalance'
import { useYinYang } from '../../hooks/useYinYang'

export default function TempleTreasury() {
  const { prices, lockedValue, temple } = useYinYang();
  const { config } = usePrepareContractWrite({
    addressOrName: TEMPLE_ADDRESS,
    contractInterface: new Interface(templeABI.abi),
    functionName: "harvest",
  });
  const { writeAsync: harvest, data } = useContractWrite(config);
  useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      temple?.refetch();
      toast.success(`Successfully harvested`);
    },
  });
  const { balanceOf: balanceOfYin } = useTokenBalance(
    tokens.yin.address,
    TEMPLE_ADDRESS
  );
  const { balanceOf: balanceOfYang } = useTokenBalance(
    tokens.yang.address,
    TEMPLE_ADDRESS
  );
  const harvestable = !temple?.nextEpoch || temple?.nextEpoch > new Date();

  const handleHarvest = async () => {
    if (!harvest) return;
    try {
      await harvest();
    } catch (err) {
      toast.error(String(err));
    }
  };

  const [times, setTimes] = React.useState<number[]>();
  React.useEffect(() => {
    if (temple?.nextEpoch) {
      const interval = setInterval(() => {
        const secondsLeft = Math.max(
          (temple.nextEpoch!.valueOf() - Date.now()) / 1000,
          0
        );
        const hours = Math.floor(secondsLeft / 3600);
        const minutes = Math.floor((secondsLeft % 3600) / 60);
        const seconds = Math.floor(secondsLeft % 60);
        setTimes([hours, minutes, seconds]);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [temple?.nextEpoch]);

  return (
    <div className="bg-base-200 flex flex-col gap-5 rounded-xl shadow-xl w-fit p-2 m-2 mx-auto">
      <div className="text-2xl font-bold text-center">Temple Treasury</div>
      <div className="flex gap-2">
        <div className="bg-base-300 rounded-xl shadow flex flex-col gap-2">
          <img src={tokens.yin.logo.src} className="w-12 h-12 p-1 m-auto" />
          <div className="text-2xl text-center font-bold">
            {tokens.yin.name}
          </div>
          <div className="text-xl justify-between stat pt-1">
            <div className="stat-title">Tokens held</div>
            <div className="stat-value">
              {balanceOfYin !== undefined
                ? numeral(balanceOfYin.toNumber()).format("aaa.aa")
                : "???"}
            </div>
            <div className="stat-desc">
              {balanceOfYin !== undefined && prices
                ? numeral(
                    balanceOfYin.toNumber() * prices[tokens.yin.address]
                  ).format("aaa.aa")
                : "???"}{" "}
              $
            </div>
          </div>
        </div>
        <div className="bg-base-300 rounded-xl shadow flex flex-col gap-2">
          <img src={tokens.yang.logo.src} className="w-12 h-12 p-1 m-auto" />
          <div className="text-2xl text-center font-bold ">
            {tokens.yang.name}
          </div>
          <div className="text-xl justify-between stat pt-1">
            <div className="stat-title">Tokens held</div>
            <div className="stat-value">
              {balanceOfYang !== undefined
                ? numeral(balanceOfYang.toNumber()).format("aaa.aa")
                : "???"}
            </div>
            <div className="stat-desc">
              {balanceOfYang !== undefined && prices
                ? numeral(
                    balanceOfYang.toNumber() * prices[tokens.yang.address]
                  ).format("aaa.aa")
                : "???"}{" "}
              $
            </div>
          </div>
        </div>
      </div>
      <div
        className={`btn btn-accent btn-full ${
          harvestable ? "btn-disabled" : ""
        }`}
        onClick={handleHarvest}
      >
        {harvestable ? (
          times ? (
            <div>
              Next harvest in <br />
              <span className="countdown text-xl">
                <span style={{ "--value": times[0] } as any}></span>:
                <span style={{ "--value": times[1] } as any}></span>:
                <span style={{ "--value": times[2] } as any}></span>
              </span>
            </div>
          ) : (
            `Next harvest in ???`
          )
        ) : (
          `Harvest now!`
        )}
      </div>
    </div>
  );
}
