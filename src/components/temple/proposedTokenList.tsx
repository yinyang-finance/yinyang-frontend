import numeral from 'numeral'
import React, { ReactNode, useState } from 'react'
import { MdHowToVote } from 'react-icons/md'

import { EXPLORER_URL, tokens } from '../../data'
import { Proposal } from '../../hooks/useTemple'
import { useYinYang } from '../../hooks/useYinYang'
import PreviousEpochModal from './PreviousEpochsModal'
import VoteModal from './VoteModal'

function ProposalList() {
  const { temple } = useYinYang();
  const [isOpen, setIsOpen] = React.useState(false);
  const [proposal, setProposal] = React.useState<Proposal>();

  return (
    <table className="table w-full">
      {proposal ? (
        <VoteModal
          isOpen={isOpen}
          proposal={proposal}
          onClose={() => {
            setIsOpen(false);
            temple?.refetch();
          }}
        />
      ) : null}
      {/* <!-- head --> */}
      <thead>
        <tr>
          <th className="bg-base-300">Name</th>
          <th className="bg-base-300">Voices</th>
          <th className="bg-base-300"></th>
        </tr>
      </thead>
      <tbody>
        {/* <!-- row 1 --> */}
        {temple?.proposals.map((proposal) => (
          <tr key={proposal.token.address}>
            <th>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="w-8 sm:w-12 h-8 sm:h-12">
                    <img
                      src={proposal.token.logo.src}
                      alt={proposal.token.name}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{proposal.token.symbol}</div>
                  <div className="text-xs opacity-50">
                    <a href={`${EXPLORER_URL}${proposal.token.address}`}>
                      {proposal.token.name}
                    </a>
                  </div>
                </div>
              </div>
            </th>
            <td>
              <div className="flex flex-col">
                <div>
                  {proposal.shares !== 0
                    ? ((proposal.voices / proposal.shares) * 100).toFixed(1)
                    : 0}
                  %
                </div>
                <div className="opacity-60 text-xs">
                  {numeral(proposal.voices).format("aa.aa")}
                </div>
              </div>
            </td>
            <th>
              <button
                className="btn btn-primary btn-sm flex flex-row gap-1"
                onClick={() => {
                  setIsOpen(true);
                  setProposal(proposal);
                }}
              >
                <div className="hidden sm:block">Vote</div>
                <MdHowToVote />
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function ProposedTokenList() {
  const { temple, prices } = useYinYang();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-5 p-2 bg-base-200 rounded-xl shadow-xl w-fit m-auto">
      <div className="font-xl text-center text-3xl font-bold">Vote</div>
      <div className="stats w-full">
        <div className="stat">
          <div className="stat-title">Value locked in the Temple</div>
          <div className="stat-value">
            {temple?.proposals[0].shares && prices[tokens.zen.address]
              ? numeral(
                  temple?.proposals[0].shares * prices[tokens.zen.address]
                ).format("aaa.aaa")
              : "???"}
            $
          </div>
          <div className="stat-desc">
            {temple?.proposals[0].shares
              ? numeral(temple.proposals[0].shares).format("aaa.aaa")
              : "???"}{" "}
            $ZEN tokens at{" "}
            {prices[tokens.zen.address]
              ? numeral(prices[tokens.zen.address]).format("aaa.aaa")
              : "???"}
            $
          </div>
          <div className="stat-figure text-secondary w-12 h-12 p-1">
            <img src={tokens.zen.logo.src} alt={tokens.zen.name} />
          </div>
        </div>
      </div>
      <div className="stats w-full">
        <div className="stat ">
          <div className="stat-title">Your voices</div>
          <div className="stat-value">
            {temple?.userVoices && prices[tokens.zen.address]
              ? numeral(temple.userVoices * prices[tokens.zen.address]).format(
                  "aaa.aaa"
                )
              : "???"}
            $
          </div>
          <div className="stat-desc">
            {temple?.proposals[0].shares
              ? numeral(temple?.userVoices).format("aaa.aaa")
              : "???"}{" "}
            $ZEN tokens at{" "}
            {prices[tokens.zen.address]
              ? numeral(prices[tokens.zen.address]).format("aaa.aaa")
              : "???"}
            $
          </div>
          <div className="stat-figure text-secondary w-12 h-12 p-1">
            <img src={tokens.zen.logo.src} alt={tokens.zen.name} />
          </div>
        </div>
      </div>
      <ProposalList />
      <div className="btn btn-ghost btn-full" onClick={() => setIsOpen(true)}>
        View previous epochs
      </div>
      <PreviousEpochModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
