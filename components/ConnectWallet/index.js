import { useEffect, useState } from 'react'
import { useConnect, useAccount, useDisconnect } from 'wagmi'

import Dropdown from '../common/Dropdown'
import Modal from '../common/Modal'
import Content from './content'

const ConnectWallet = () => {
  const { connect, connectors, isLoading } = useConnect()
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(false)
  }, [isConnected, setShowModal])

  const handleOpen = () => {
    if (!isConnected) setShowModal(true)
  }

  const shortenX = (address) => {
    return address.substring(0, 4) + '....' + address.slice(-4)
  }

  return (
    <div>
      {isConnected ? (
        <Dropdown
          label={shortenX(address)}
          items={[
            {
              label: 'Disconnect',
              onClick: disconnect,
            },
          ]}
        />
      ) : (
        <button
          className="rounded-md bg-indigo-500 text-white hover:bg-indigo-400 disabled:bg-indigo-400 px-4 py-3"
          onClick={handleOpen}
          disabled={isLoading}
        >
          {isLoading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={'Select Wallet'}
        content={
          <Content
            connect={connect}
            connectors={connectors}
            isLoading={isLoading}
          />
        }
      />
    </div>
  )
}

export default ConnectWallet
