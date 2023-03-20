import Claims from './claims'
import ProposedTokenList from './proposedTokenList'
import TempleTreasury from './templeTreasury'

export default function TempleContent() {
  return (
    <div className="flex flex-col gap-5 p-3">
      <TempleTreasury />
      <Claims />
      <ProposedTokenList />
    </div>
  );
}
