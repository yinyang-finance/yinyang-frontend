import { Interface } from "ethers/lib/utils";
import { toast } from "react-toastify";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

import { TEMPLE_ADDRESS, tokens } from "../../data";
import templeABI from "../../data/abis/Temple.json";
import { usePrices } from "../../hooks/usePrices";
import useTemple from "../../hooks/useTemple";
import useTokenBalance from "../../hooks/useTokenBalance";

export default function Treasury() {
  const { nextEpoch } = useTemple();
  const { prices } = usePrices();
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
  const harvestable = !nextEpoch || nextEpoch > new Date();

  const handleHarvest = async () => {
    if (!harvest) return;
    try {
      await harvest();
    } catch (err) {
      toast.error(String(err));
    }
  };
  console.log(prices);

  return (
    <div className="bg-base-200 flex flex-col gap-5 rounded-xl shadow-xl w-fit p-2 m-2 mx-auto">
      <div className="text-2xl font-bold text-center">Treasury</div>
      <div className="flex gap-2">
        <div className="bg-base-300 rounded-xl shadow flex flex-col gap-2">
          <div className="text-2xl text-center font-bold">
            {tokens.yin.name}
          </div>
          <div className="text-xl justify-between stat pt-1">
            <div className="stat-title">Tokens held</div>
            <div className="stat-value">
              {balanceOfYin !== undefined ? balanceOfYin.toNumber() : "???"}
            </div>
            <div className="stat-desc">
              {balanceOfYin !== undefined && prices
                ? balanceOfYin.toNumber() * prices.yin
                : "???"}{" "}
              $
            </div>
          </div>
        </div>
        <div className="bg-base-300 rounded-xl shadow flex flex-col gap-2">
          <div className="text-2xl text-center font-bold ">
            {tokens.yang.name}
          </div>
          <div className="text-xl justify-between stat pt-1">
            <div className="stat-title">Tokens held</div>
            <div className="stat-value">
              {balanceOfYang !== undefined ? balanceOfYang.toNumber() : "???"}
            </div>
            <div className="stat-desc">
              {balanceOfYang !== undefined && prices
                ? balanceOfYang.toNumber() * prices?.yang
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
        {harvestable
          ? `Next harvest in ${
              nextEpoch ? nextEpoch?.valueOf() / 1000 - Date.now() : "???"
            }`
          : `Harvest now!`}
      </div>
    </div>
  );
}
