import GardenFarms from './farms'
import Treasury from './treasury'

export default function GardenContent() {
  return (
    <div className="flex flex-col gap-5 p-3">
      <Treasury />
      <GardenFarms />
    </div>
  );
}
