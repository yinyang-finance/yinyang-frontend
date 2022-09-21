import { useState } from 'react'
import { useAccount, useContract, useSigner } from 'wagmi'
import { utils } from 'ethers'
import { toast } from 'react-toastify'

import Layout from '../sections/Layout'
import contractABI from '../data/contractABI.json'

export default function Donate() {
  const { isConnected } = useAccount()
  const { data: signer } = useSigner()
  const contract = useContract({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    contractInterface: contractABI,
    signerOrProvider: signer,
  })

  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [hasError, setHasError] = useState(false)
  const [donating, setDonating] = useState(false)

  // handle recipient address change
  const handleRecipientAddress = (e) => {
    setRecipient(e.target.value)
    setHasError(false)
  }

  // handle donation
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!utils.isAddress(recipient)) {
      setHasError(true)
      return
    }

    setDonating(true)
    try {
      const result = await contract.donate(recipient, {
        value: utils.parseEther(amount),
      })
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
    } catch (error) {
      console.log(error)
      toast.error(
        <>
          <p className="text-md font-bold">Transaction Failed!</p>
          <p className="text-sm">Please try again later!</p>
        </>,
      )
    }
    setDonating(false)
  }

  return (
    <Layout>
      {/* Hero Section  */}

      <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
        {/* Headlines */}
        <p className="text-center font-semibold text-5xl">Donation Session</p>
        <p className="text-center">
          Donate Bitcoin, <span className="text-red-500">Ethereum</span> and
          other cyptocurrencies to nonprofits, charities, schools, faith-based
          organizations and more and reduce tax-gain burdens
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col col-span-2">
              <label className="mb-1">Recipient Address:</label>
              <input
                type="text"
                className="border rounded border-gray-400 p-2"
                value={recipient}
                onChange={handleRecipientAddress}
                required
              />
              {hasError && (
                <p className="text-red-500 mt-2">Wrong recipient address!!!</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Amount (ETH):</label>
              <input
                type="number"
                className="border rounded border-gray-400 p-2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0.01"
                step="0.01"
                required
              />
            </div>
          </div>

          <button
            className="rounded-md bg-indigo-500 text-white hover:bg-indigo-400 disabled:bg-indigo-400 px-4 py-3 mt-4"
            disabled={!isConnected || donating}
          >
            {donating ? 'Donating...' : 'Donate Crypto'}
          </button>
        </form>
      </section>
    </Layout>
  )
}
