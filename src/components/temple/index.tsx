import Treasury from '../garden/treasury'
import Claims from './claims'
import ProposedTokenList from './proposedTokenList'

export default function TempleContent() {
  return (
    <div className="flex flex-col gap-5 p-3">
      <Treasury />
      <Claims />
      <ProposedTokenList />
    </div>
  );
}
