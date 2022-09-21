import Metamask from '../icons/metamask.svg'
import Coinbase from '../icons/coinbase.svg'

const Content = ({ connect, connectors, isLoading }) => {
  const handleConnect = (connector) => {
    connect({ connector })
  }

  return (
    <div className="flex">
      {connectors.map((connector) => (
        <button
          className="flex flex-1 flex-col items-center hover:shadow p-2 disabled:opacity-50"
          key={connector.id}
          onClick={() => handleConnect(connector)}
          disabled={isLoading}
        >
          {connector.id === 'metaMask' && <Metamask className="h-12" />}
          {connector.id === 'coinbaseWallet' && <Coinbase className="h-12" />}
          <p className="mt-2 text-lg">{connector.name}</p>
        </button>
      ))}
    </div>
  )
}

export default Content
