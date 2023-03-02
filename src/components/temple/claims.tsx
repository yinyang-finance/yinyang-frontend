import { Interface } from "ethers/lib/utils";
import { useState } from "react";
import { BiCoinStack } from "react-icons/bi";
import { toast } from "react-toastify";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { TEMPLE_ADDRESS } from "../../data";
import templeABI from "../../data/abis/Temple.json";
import { useYinYang } from "../../hooks/useYinYang";

export default function Claims() {
  const { temple } = useYinYang();
  const { config } = usePrepareContractWrite({
    addressOrName: TEMPLE_ADDRESS,
    contractInterface: new Interface(templeABI.abi),
    functionName: "claimAllVoterShares",
  });
  const { writeAsync: claimAll, data } = useContractWrite(config);
  useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      temple?.refetch();
      toast.success(`Successfully claimed tokens`);
    },
  });
  const [loading, setLoading] = useState(false);

  const handleClaim = async () => {
    if (temple?.refetch && claimAll) {
      setLoading(true);
      try {
        await claimAll();
        temple.refetch();
      } catch (err) {
        toast.error(String(err));
      } finally {
        setLoading(false);
      }
    }
  };

  return temple?.pendingShares && (temple?.pendingShares?.length || 0) > 0 ? (
    <div className="p-3 bg-base-200 w-fit m-auto rounded-xl">
      <div className="font-xl text-center text-3xl font-bold">Claim</div>
      <table className="table mt-2">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th className="bg-base-300">Name</th>
            <th className="bg-base-300">Amount</th>
            <th className="bg-base-300"></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {temple.pendingShares.map((share) => (
            <tr key={share.token.address}>
              <th>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12">
                      <img src={share.token.logo.src} alt={share.token.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{share.token.symbol}</div>
                    <div className="text-sm opacity-50">{share.token.name}</div>
                  </div>
                </div>
              </th>
              <td className="text-xl">{share.amount.toFixed(3)}</td>
              <th>
                <button
                  className={`btn btn-primary ${loading ? "loading" : ""}`}
                  onClick={() => {
                    handleClaim();
                  }}
                >
                  Claim
                  <BiCoinStack className="ml-1" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : // <div className="flex flex-col gap-5 p-3 m-auto bg-base-200 rounded-xl">
  //   <div className="text-center text-2xl font-bold">Claimable tokens</div>
  //   <div className="p-2 bg-base-100 rounded-xl">
  //     {temple.pendingShares.map((e) => (
  //       <div className="flex flex-row gap-2 justify-between my-auto">
  //         <div>{e.amount.toFixed(3)}</div>
  //         <div className="flex flex-row gap-1">
  //           <div className="my-auto font-bold">{e.token.name}</div>
  //           <div>
  //             <img className="w-8" src={e.token.logo.src} />
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // </div>
  null;
}
