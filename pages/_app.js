import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import { WagmiConfig, createClient, configureChains, chain } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { ToastContainer } from 'react-toastify'
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'

import '../styles/globals.css'

// Configure chains and providers
const { chains, provider, webSocketProvider } = configureChains(
  [chain.rinkeby],
  [publicProvider()],
)

// Configure wagmi client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi.sh',
      },
    }),
  ],
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }) {
  const [documentLoaded, setDocumentLoaded] = useState(false)

  useEffect(() => {
    setDocumentLoaded(true)
  }, [])

  return (
    <>
      {documentLoaded && (
        <ThemeProvider enableSystem={true} attribute="class">
          <WagmiConfig client={client}>
            <Component {...pageProps} />
            <ToastContainer position="bottom-right" autoClose={5000} />
          </WagmiConfig>
        </ThemeProvider>
      )}
    </>
  )
}

export default MyApp
