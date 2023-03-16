import Decimal from 'decimal.js'
import numeral from 'numeral'
import { MdClose } from 'react-icons/md'

import { REWARDS_PER_BLOCK } from '../../data'
import { FarmData } from '../../hooks/useFarm'
import { useYinYang } from '../../hooks/useYinYang'

export function DetailsModal({
  farmData,
  onClose,
  isOpen,
}: {
  farmData: FarmData;
  onClose: () => void;
  isOpen: boolean;
}) {
  const { prices } = useYinYang();

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box flex flex-col gap-3 justify-start">
        <div className="bg-base-200 rounded-xl">
          <div className="text-xl bg-base-300 rounded-t-xl p-2">APR</div>
          <div className="flex flex-wrap gap-1 justify-center text-xs my-auto p-1">
            <div
              className="tooltip"
              data-tip={numeral(
                REWARDS_PER_BLOCK.div(10 ** 18)
                  .mul(5256000) // 6s block for a year
                  .toNumber()
              ).format("aaa.aa")}
            >
              <div className="btn btn-ghost ">Rewards per year</div>
            </div>
            <div className="my-auto">x</div>
            <div
              className="tooltip"
              data-tip={numeral(
                new Decimal(farmData.multiplier)
                  .div(farmData.totalAllocPoints)
                  .toNumber()
              ).format("aaa.aa%")}
            >
              <div className="btn btn-ghost">Farm share</div>
            </div>
            <div className="my-auto">/</div>
            <div
              className="tooltip"
              data-tip={numeral(
                new Decimal(
                  farmData.lpTokens
                    ? (prices[farmData.lpTokens[0].address] +
                        prices[farmData.lpTokens[1].address]) /
                      2
                    : prices[farmData.token.address]
                ).toNumber()
              ).format("aaa.aa")}
            >
              <div className="btn btn-ghost">Deposited token's value</div>
            </div>
            <div className="my-auto">/</div>
            <div
              className="tooltip"
              data-tip={numeral(
                new Decimal(farmData.totalDeposited || 1).toNumber()
              ).format("aaa.aa")}
            >
              <div className="btn btn-ghost">Total deposited token</div>
            </div>
          </div>
        </div>
        <div className="bg-base-200 rounded-xl">
          <div className="text-xl bg-base-300 rounded-t-xl p-2">APR</div>
          <div className="flex flex-wrap gap-1 text-lg justify-center my-auto p-2">
            <div>
              You own{" "}
              {farmData.userDeposit && farmData.totalDeposited
                ? numeral(
                    farmData.userDeposit / farmData.totalDeposited
                  ).format("aa.aa%")
                : "???"}{" "}
              of deposited tokens
            </div>
          </div>
        </div>
        <div className="btn flex" onClick={onClose}>
          <div>CLOSE</div>
          <MdClose className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
