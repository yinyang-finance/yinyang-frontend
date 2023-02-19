import { YANG_DISTRIBUTOR, YIN_DISTRIBUTOR } from '../../data'
import { Token, tokens } from '../../data/tokens'
import FarmCard from './farmCard'

export interface Farm {
  poolId: number;
  token: Token;
  multiplier: number;
  yin: boolean;
  distributor: string;
}
const farms: Farm[] = [
  {
    poolId: 0,
    token: tokens.wcanto,
    multiplier: 1,
    yin: false,
    distributor: YANG_DISTRIBUTOR,
  },
  {
    poolId: 1,
    token: tokens.note,
    multiplier: 1,
    yin: true,
    distributor: YIN_DISTRIBUTOR,
  },
];

export default function FarmsContent() {
  return (
    <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
      {/* Headlines */}
      <p className="text-center font-semibold text-5xl">Farms</p>
      <p className="text-center">
        Farm the initial supply of $YIN and $YANG by depositing tokens in our
        the farms below.
      </p>
      <div className="flex flex-wrap gap-5">
        {farms.map((farm) => (
          <FarmCard key={farm.poolId} farm={farm} />
        ))}
      </div>
    </section>
  );
}
