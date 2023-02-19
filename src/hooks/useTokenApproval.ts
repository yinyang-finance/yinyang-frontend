import Decimal from 'decimal.js'
import { Interface } from 'ethers/lib/utils'
import React from 'react'
import { erc20ABI, useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'

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
    args: [spender, new Decimal(2).pow(256).sub(1).toString()],
  });
  const { isLoading, status, write: approve } = useContractWrite(config);
  const { data, refetch } = useContractRead({
    addressOrName,
    contractInterface: new Interface(erc20ABI),
    functionName: "allowance",
    args: [account ? account : connectedAccount.address, spender],
  });

  React.useEffect(() => {
    if (status === "success") {
      refetch();
    }
  }, [status, refetch]);

  return {
    approve,
    allowance: data ? new Decimal(data.toString()) : new Decimal(0),
    isApproving: isLoading,
  };
}
