import { useState, useEffect } from 'react'
import { useAccount, useContract, useSigner } from 'wagmi'
import { utils } from 'ethers'
import { toast } from 'react-toastify'

import Layout from '../sections/Layout'
import contractABI from '../data/contractABI.json'

export default function Withdraw() {
  const { address, isConnected } = useAccount()
  const { data: signer } = useSigner()
  const contract = useContract({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    contractInterface: contractABI,
    signerOrProvider: signer,
  })

  const [balance, setBalance] = useState(0)
  const [amount, setAmount] = useState('')
  const [hasError, setHasError] = useState(false)
  const [withdrawing, setWithdrawing] = useState(false)

  useEffect(() => {
    if (address && contract.provider) {
      getReceipt()
    }
  }, [address, contract])

  const getReceipt = async () => {
    try {
      const receipt = await contract.receipts(address)
      setBalance(Number(utils.formatEther(receipt)))
    } catch (error) {
      console.log(error)
    }
  }

  // handle withdraw amount change
  const handleAmount = (e) => {
    setAmount(e.target.value)
    setHasError(false)
  }

  // handle withdraw
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (amount > balance) {
      setHasError(true)
      return
    }

    setWithdrawing(true)
    try {
      const result = await contract.withdraw(utils.parseEther(amount))
      toast.success(
        <>
          <p className="text-md font-bold">Transaction Success!</p>
          <p className="text-sm">
            Click{' '}
            <a
              href={`https://rinkeby.etherscan.io/tx/${result.hash}`}
              className="underline"
            >
              here
            </a>{' '}
            to check the transaction detail
          </p>
        </>,
      )
      await getReceipt()
    } catch (error) {
      console.log(error)
      toast.error(
        <>
          <p className="text-md font-bold">Transaction Failed!</p>
          <p className="text-sm">Please try again later!</p>
        </>,
      )
    }
    setWithdrawing(false)
  }

  return (
    <Layout>
      {/* Hero Section  */}

      <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
        {/* Headlines */}
        <p className="text-center font-semibold text-5xl">Withdraw Session</p>
        <p className="text-center">
          Withdraw Bitcoin, <span className="text-red-500">Ethereum</span> and
          other cyptocurrencies from Smart Contract
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col col-start-2">
              <div className="flex mb-1 justify-between items-center">
                <label className="mb-1">Amount (ETH):</label>
                <span>{balance}</span>
              </div>
              <input
                type="number"
                className="border rounded border-gray-400 p-2"
                value={amount}
                onChange={handleAmount}
                min="0.01"
                step="0.01"
                required
              />
              {hasError && (
                <p className="text-red-500 mt-2">
                  Max amount ({balance}) reached!!!
                </p>
              )}
            </div>
          </div>

          <button
            className="rounded-md bg-indigo-500 text-white hover:bg-indigo-400 disabled:bg-indigo-400 px-4 py-3 mt-4"
            disabled={!isConnected || withdrawing || !balance}
          >
            {withdrawing ? 'Withdrawing...' : 'Withdraw Crypto'}
          </button>
        </form>
      </section>
    </Layout>
  )
}
