import Claims from './claims'
import ProposedTokenList from './proposedTokenList'
import TempleTreasury from './templeTreasury'

export default function TempleContent() {
  return (
    <div className="flex flex-col gap-5 p-2">
      <div className="text-center flex flex-col gap-2 p-2">
        <div className="font-semibold text-5xl">Temple</div>
        <div>
          When the timer reaches 0, the Temple Treasury can be harvested: Yin
          ang Yang tokens in the treasury are sold for to buy the tokens that
          voters chose using Zen. The tokens bought are distributed pro rata of
          the voices that participated in the epoch.
        </div>
        <div>
          Use your voices to vote. Voices can be obtained by burning Zen. Voices
          acquired are permanent and carried on to the next epoch. However, if
          you did not vote during an epoch, you will not be eligible to claim
          tokens bought using the treasury for the epoch
        </div>
      </div>
      <TempleTreasury />
      <Claims />
      <ProposedTokenList />
    </div>
  );
}
