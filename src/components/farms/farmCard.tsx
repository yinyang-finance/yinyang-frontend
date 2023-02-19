import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { Farm } from '.'
import { EXPLORER_URL } from '../../data'
import useTokenBalance from '../../hooks/useTokenBalance'
import DepositModal from './depositModal'

interface Props {
  farm: Farm;
}
export default function FarmCard({ farm }: Props) {
  const [openDeposit, setOpenDeposit] = React.useState(false);
  const { balanceOf } = useTokenBalance(
    "0x68B1D87F95878fE05B998F19b66F4baba5De1aed",
    "0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1"
  );
  console.log(balanceOf);

  return (
    <div className="bg-base-300 p-2 rounded-xl shadow-xl w-fit flex flex-col gap-3">
      <DepositModal
        farm={farm}
        isOpen={openDeposit}
        onClose={() => setOpenDeposit(false)}
      />
      <div className="text-2xl font-bold text-center m-auto flex flex-row gap-2">
        {farm.token.name}
        <Link href={`${EXPLORER_URL}${farm.token.address}`}>
          <FaExternalLinkAlt className="my-auto" />
        </Link>
      </div>
      <div className="flex flex-row justify-between">
        <div className="">Multiplier</div>
        <div className="font-bold">x{farm.multiplier}</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="btn btn-neutral w-full">Collect</div>
        <div className="btn-group">
          <div className="btn btn-secondary w-3/6">Withdraw</div>
          <div
            className="btn btn-primary w-3/6"
            onClick={() => setOpenDeposit(true)}
          >
            Deposit
          </div>
        </div>
      </div>
    </div>
  );
}
