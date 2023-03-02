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
  useWaitForTransaction,
} from "wagmi";

import { tokens } from "../data";

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
  const { writeAsync: approve, data: writeData } = useContractWrite(config);
  useWaitForTransaction({
    hash: writeData?.hash.toString(),
    onSuccess: () => {
      refetch();
      toast.success(
        `Approved token ${
          Object.values(tokens).find((e) => e.address === addressOrName)
            ?.name || addressOrName
        }`
      );
    },
  });
  const { data, refetch } = useContractRead({
    addressOrName,
    contractInterface: new Interface(erc20ABI),
    functionName: "allowance",
    args: [account ? account : connectedAccount.address, spender],
  });

  const handleApprove = async () => {
    if (approve) {
      try {
        await approve();
      } catch (err) {
        toast.error(String(err));
      }
    }
  };

  return {
    approve: handleApprove,
    allowance: data ? new Decimal(data.toString()) : new Decimal(0),
    isApproving: status === "loading",
  };
}
