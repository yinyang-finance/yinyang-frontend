import Claims from "./claims";
import ProposedTokenList from "./proposedTokenList";
import TempleTreasury from "./templeTreasury";

export default function TempleContent() {
  return (
    <div className="flex flex-col gap-5 p-2">
      <div className="text-center flex flex-col gap-2 p-2">
        <div className="font-semibold text-5xl">Temple</div>
        <div>Welcome to the Temple, Citizen.</div>
        <div>
          By casting your votes with ZEN you can choose what to spend the Temple
          Treasury tokens on.
        </div>
        <div>
          Vote for your preferred token, and once the Epoch finishes the Yin &
          Yang tokens in the treasury are automatically converted into the
          selected tokens. Then, you simply claim your share of the rewards!
        </div>
        <div>
          What happens to the ZEN you used to Vote? It is burned, but in
          exchange you receive your 'VOICES' a permanent marker of the ZEN you
          burned, which you can use to vote in the following Epochs: 1 burned
          ZEN = 1 VOICE.
        </div>
        <div>
          Remember you must vote in the current Epoch, to claim the rewards!
        </div>
      </div>
      <TempleTreasury />
      <Claims />
      <ProposedTokenList />
    </div>
  );
}
