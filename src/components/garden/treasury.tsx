import { Interface } from 'ethers/lib/utils'
import React from 'react'
import { toast } from 'react-toastify'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import { PAIR_YANG_WCANTO_ADDRESS, PAIR_YIN_WCANTO_ADDRESS, TEMPLE_ADDRESS, tokens } from '../../data'
import templeABI from '../../data/abis/Temple.json'
import useTokenBalance from '../../hooks/useTokenBalance'
import { useYinYang } from '../../hooks/useYinYang'

export default function Treasury() {
  const { prices, lockedValue, temple } = useYinYang();
  const { config } = usePrepareContractWrite({
    addressOrName: TEMPLE_ADDRESS,
    contractInterface: new Interface(templeABI.abi),
    functionName: "harvest",
  });
  const { writeAsync: harvest } = useContractWrite(config);
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
      temple?.refetch();
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
      <div className="text-2xl font-bold text-center">Treasury</div>
      <div className="stats m-auto">
        <div className="stat">
          <div className="stat-title">Total value locked</div>
          <div className="stat-value">
            {Object.values(lockedValue)
              .reduce((a, b) => a + b, 0)
              .toFixed(2)}
            $
          </div>
          <div className="stat-desc">
            Including{" "}
            {[
              lockedValue[PAIR_YIN_WCANTO_ADDRESS],
              lockedValue[PAIR_YANG_WCANTO_ADDRESS],
            ]
              .reduce((a, b) => a + b, 0)
              .toFixed(2)}
            $ of liquidity
          </div>
        </div>
      </div>
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
                ? balanceOfYin.toNumber().toFixed(2)
                : "???"}
            </div>
            <div className="stat-desc">
              {balanceOfYin !== undefined && prices
                ? (
                    balanceOfYin.toNumber() * prices[tokens.yin.address]
                  ).toFixed(2)
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
                ? balanceOfYang.toNumber().toFixed(2)
                : "???"}
            </div>
            <div className="stat-desc">
              {balanceOfYang !== undefined && prices
                ? (
                    balanceOfYang.toNumber() * prices[tokens.yang.address]
                  ).toFixed(2)
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
