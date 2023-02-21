import { yangFarms, yinFarms } from '../../data/farms'
import FarmCard from './farmCard'

export default function FarmsContent() {
  return (
    <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
      {/* Headlines */}
      <p className="text-center font-semibold text-5xl">Farms</p>
      <p className="text-center">
        Farm the initial supply of $YIN and $YANG by depositing tokens in our
        the farms below.
      </p>
      <div>
        <div className="text-2xl font-bold">Yin farms</div>
        <div className="flex flex-wrap gap-5">
          {yinFarms.map((farm) => (
            <FarmCard key={farm.poolId} farm={farm} />
          ))}
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold">Yang farms</div>
        <div className="flex flex-wrap gap-5">
          {yangFarms.map((farm) => (
            <FarmCard key={farm.poolId} farm={farm} />
          ))}
        </div>
      </div>
    </section>
  );
}
