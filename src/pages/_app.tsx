import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import 'tailwindcss/tailwind.css'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const localChain = {
  /** ID in number form */
  id: 7700,
  /** Human-readable name */
  name: "Localnet",
  /** Internal network name */
  network: "localhost",
  /** Collection of RPC endpoints */
  rpcUrls: {
    "7700": "http://127.0.0.1:8545"
  },
  /** Flag for test networks */
  testnet: true
};

chain.localhost.id = 7700

// Configure chains and providers
const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.localhost],
  [publicProvider()],
)

console.log(chain.localhost);


const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

// Configure wagmi client
const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }: AppProps) {
  const [documentLoaded, setDocumentLoaded] = useState(false)

  useEffect(() => {
    setDocumentLoaded(true)
  }, [])

  return (
    <>
      {documentLoaded && (
        <ThemeProvider enableSystem={true} attribute="class">
          <WagmiConfig client={client}>
          <RainbowKitProvider chains={chains}>
            <Component {...pageProps} />
            <ToastContainer position="bottom-right" autoClose={5000} />
            </RainbowKitProvider>
          </WagmiConfig>
        </ThemeProvider>
      )}
    </>
  )
}

export default MyApp
