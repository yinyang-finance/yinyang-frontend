import Decimal from "decimal.js";
import { Interface } from "ethers/lib/utils";
import React from "react";
import { toast } from "react-toastify";
import {
  erc20ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

export default function useTokenApproval(
  addressOrName: string,
  spender: string,
  account?: string
) {
  const connectedAccount = useAccount();
  const { config } = usePrepareContractWrite({
    addressOrName,
    contractInterface: new Interface(erc20ABI),
    functionName: "approve",
    args: [spender, new Decimal(2).pow(256).sub(1).toHex()],
  });
  const { writeAsync: approve } = useContractWrite(config);
  const { data, refetch } = useContractRead({
    addressOrName,
    contractInterface: new Interface(erc20ABI),
    functionName: "allowance",
    args: [account ? account : connectedAccount.address, spender],
  });
  const [loading, setLoading] = React.useState(false);

  const handleApprove = async () => {
    if (approve) {
      setLoading(true);
      try {
        await approve();
        refetch();
      } catch (err) {
        toast.error(String(err));
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    approve: handleApprove,
    allowance: data ? new Decimal(data.toString()) : new Decimal(0),
    isApproving: loading,
  };
}
