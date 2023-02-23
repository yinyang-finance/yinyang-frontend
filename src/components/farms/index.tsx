import { BiError } from 'react-icons/bi'

import { yangFarms, yinFarms } from '../../data/farms'
import FarmCard from './farmCard'

export default function FarmsContent() {
  return (
    <section className="flex flex-col justify-center items-center space-y-10 mt-12 p-3">
      <div className="alert alert-error shadow-lg">
        <div>Pending rewards are bugged</div>
        <BiError className="w-8 h-8" />
      </div>
      <p className="text-center font-semibold text-5xl">Farms</p>
      <p className="text-center">
        Farm the initial supply of $YIN and $YANG by depositing tokens in our
        the farms below.
      </p>
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-bold text-center">Yin farms</div>
        <div className="flex flex-wrap gap-5 justify-center">
          {yinFarms.map((farm) => (
            <FarmCard key={farm.poolId} farm={farm} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-bold text-center">Yang farms</div>
        <div className="flex flex-wrap gap-5 justify-center">
          {yangFarms.map((farm) => (
            <FarmCard key={farm.poolId} farm={farm} />
          ))}
        </div>
      </div>
    </section>
  );
}
