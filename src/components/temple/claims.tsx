import { Interface } from "ethers/lib/utils";
import { useState } from "react";
import { BiCoinStack } from "react-icons/bi";
import { toast } from "react-toastify";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { TEMPLE_ADDRESS } from "../../data";
import templeABI from "../../data/abis/Temple.json";
import { useYinYang } from "../../hooks/useYinYang";

export default function Claims() {
  const { address } = useAccount();
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
  const { config: configUpdate } = usePrepareContractWrite({
    addressOrName: TEMPLE_ADDRESS,
    contractInterface: new Interface(templeABI.abi),
    functionName: "updateUserAccount",
    args: [address, temple?.currentEpoch],
  });
  const { writeAsync: updateUser, data: dataUpdate } =
    useContractWrite(configUpdate);
  useWaitForTransaction({
    hash: dataUpdate?.hash,
    onSuccess: () => {
      temple?.refetch();
      toast.success(`Successfully updated account`);
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

  console.log(temple);

  if (temple?.pendingShares && (temple?.pendingShares?.length || 0) > 0) {
    return (
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
                        <img
                          src={share.token.logo.src}
                          alt={share.token.name}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{share.token.symbol}</div>
                      <div className="text-sm opacity-50">
                        {share.token.name}
                      </div>
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
    );
  } else if ((temple?.currentEpoch || 0) > (temple?.lastUserUpdate || 0)) {
    return (
      <div className="bg-base-200 rounded-xl text-center p-2 w-fit m-auto flex flex-col gap-2">
        <div className="text-xl font-bold">You are not update to date</div>
        <div>You might be missing rewards.</div>
        <div
          className="btn btn-secondary"
          onClick={() => updateUser && updateUser()}
        >
          Update your account
        </div>
      </div>
    );
  } else {
    return null;
  }
}
