import Decimal from "decimal.js";
import { Interface } from "ethers/lib/utils";
import { erc20ABI, useAccount, useContractReads } from "wagmi";

export default function useTokenBalance(
  addressOrName: string,
  account?: string
) {
  const connectedAccount = useAccount();

  const contract = {
    addressOrName,
    contractInterface: new Interface(erc20ABI),
  };
  const decimals = {
    ...contract,
    functionName: "decimals",
    args: [],
  };
  const balanceOf = {
    ...contract,
    functionName: "balanceOf",
    args: [account ? account : connectedAccount.address],
  };
  const { data, refetch, status } = useContractReads({
    allowFailure: true,
    contracts: [decimals, balanceOf],
  });

  return data && data.filter(Boolean).length === 2
    ? {
        balanceOf: new Decimal(data[1]?.toString()).div(
          10 ** Number(data[0]?.toString())
        ),
        decimals: new Decimal(data[0].toString()).toNumber(),
        status,
        refetch,
      }
    : { refetch, status };
}
