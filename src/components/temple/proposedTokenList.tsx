import numeral from "numeral";
import React, { ReactNode } from "react";
import { MdHowToVote } from "react-icons/md";

import { EXPLORER_URL, tokens } from "../../data";
import { Proposal } from "../../hooks/useTemple";
import { useYinYang } from "../../hooks/useYinYang";
import VoteModal from "./VoteModal";

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
                  <div className="w-12 h-12">
                    <img
                      src={proposal.token.logo.src}
                      alt={proposal.token.name}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{proposal.token.symbol}</div>
                  <div className="text-sm opacity-50">
                    <a href={`${EXPLORER_URL}${proposal.token.address}`}>
                      {proposal.token.name}
                    </a>
                  </div>
                </div>
              </div>
            </th>
            <td className="text-xl">
              {proposal.shares !== 0
                ? ((proposal.voices / proposal.shares) * 100).toFixed(1)
                : 0}
              %
            </td>
            <th>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setIsOpen(true);
                  setProposal(proposal);
                }}
              >
                Vote
                <MdHowToVote className="ml-1" />
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
  return (
    <div className="flex flex-col gap-5 p-3 bg-base-200 rounded-xl shadow-xl w-fit m-auto">
      <div className="font-xl text-center text-3xl font-bold">Vote</div>
      <div className="stats">
        <div className="stat">
          <div className="stat-title">Value locked in governance</div>
          <div className="stat-value">
            {temple?.proposals[0].shares && prices[tokens.zen.address]
              ? numeral(
                  temple?.proposals[0].shares * prices[tokens.zen.address]
                ).format("aaa.aa")
              : "???"}
            $
          </div>
          <div className="stat-desc">
            {temple?.proposals[0].shares
              ? numeral(temple.proposals[0].shares).format("aaa.aa")
              : "???"}{" "}
            $ZEN tokens at{" "}
            {prices[tokens.zen.address]
              ? numeral(prices[tokens.zen.address]).format("aaa.aa")
              : "???"}
            $
          </div>
          <div className="stat-figure text-secondary w-12 h-12 p-1">
            <img src={tokens.zen.logo.src} alt={tokens.zen.name} />
          </div>
        </div>
      </div>
      <ProposalList />
    </div>
  );
}
