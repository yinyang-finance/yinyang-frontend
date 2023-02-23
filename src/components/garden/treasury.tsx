import { TEMPLE_ADDRESS, tokens } from '../../data'
import { usePrices } from '../../hooks/usePrices'
import useTokenBalance from '../../hooks/useTokenBalance'

export default function Treasury() {
  const { prices } = usePrices();
  const { balanceOf: balanceOfYin } = useTokenBalance(
    tokens.yin.address,
    TEMPLE_ADDRESS
  );
  const { balanceOf: balanceOfYang } = useTokenBalance(
    tokens.yang.address,
    TEMPLE_ADDRESS
  );
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
    </div>
  );
}
