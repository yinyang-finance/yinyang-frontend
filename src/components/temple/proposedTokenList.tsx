import React, { ReactNode } from "react";

import useTemple, { Proposal } from "../../hooks/useTemple";
import VoteModal from "./VoteModal";

function ProposalList() {
  const { proposals, refetch } = useTemple();
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
            refetch();
          }}
        />
      ) : null}
      {/* <!-- head --> */}
      <thead>
        <tr>
          <th>Name</th>
          <th>Voices</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* <!-- row 1 --> */}
        {proposals.map((proposal) => (
          <tr>
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
                    {proposal.token.name}
                  </div>
                </div>
              </div>
            </th>
            <td className="text-xl">{proposal.voices.toFixed(3)}</td>
            <th>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setIsOpen(true);
                  setProposal(proposal);
                }}
              >
                Vote
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function ProposedTokenList() {
  return (
    <div className="flex flex-col gap-5 p-3 bg-base-200 rounded-xl shadow-xl w-fit m-auto">
      <ProposalList />
    </div>
  );
}
