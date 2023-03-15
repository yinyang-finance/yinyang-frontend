import { tokens } from '../../data'
import { zenFarms } from '../../data/farms'
import FarmCard from '../farms/farmCard'

export default function GardenFarms() {
  return (
    <div>
      <div className="text-center text-xl p-2">
        Provide liquidity to earn ${tokens.zen.symbol}
      </div>
      <div className="flex flex-wrap gap-3 justify-center mx-auto">
        {zenFarms.map((farm) => (
          <FarmCard farm={farm} key={farm.token.address} />
        ))}
      </div>
    </div>
  );
}
