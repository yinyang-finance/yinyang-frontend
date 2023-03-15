import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import 'tailwindcss/tailwind.css'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { FaYinYang } from 'react-icons/fa'
import { ToastContainer } from 'react-toastify'
import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

import YinYangProvider from '../contexts/Yinying'

const localChain: Chain = {
  /** ID in number form */
  id: 7700,
  /** Human-readable name */
  name: "Localnet",
  /** Internal network name */
  network: "localhost",
  /** Collection of RPC endpoints */
  rpcUrls: {
    default: "http://127.0.0.1:8545",
    "7700": "http://127.0.0.1:8545",
  },
  /** Flag for test networks */
  testnet: true,
  multicall: {
    address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    blockCreated: 2905789,
  },
};
const cantoTestnetChain: Chain = {
  /** ID in number form */
  id: 740,
  /** Human-readable name */
  name: "Testnet",
  /** Internal network name */
  network: "testnet",
  /** Collection of RPC endpoints */
  rpcUrls: {
    default: "https://eth.plexnode.wtf",
  },
  /** Flag for test networks */
  testnet: true,
  multicall: {
    address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    blockCreated: 2905789,
  },
};
const cantoMainnet: Chain = {
  /** ID in number form */
  id: 7700,
  /** Human-readable name */
  name: "Canto",
  /** Internal network name */
  network: "canto",
  /** Collection of RPC endpoints */
  rpcUrls: {
    default: "https://canto.slingshot.finance",
    "7700": "https://canto.slingshot.finance",
  },
  /** Flag for test networks */
  multicall: {
    address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    blockCreated: 2905789,
  },
};

// Configure chains and providers
const { chains, provider, webSocketProvider } = configureChains(
  [cantoMainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "yinyang.fi",
  chains,
});

// Configure wagmi client
const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [documentLoaded, setDocumentLoaded] = useState(false);

  useEffect(() => {
    setDocumentLoaded(true);
  }, []);

  return (
    <>
      {documentLoaded ? (
        <ThemeProvider enableSystem={true} attribute="class">
          <WagmiConfig client={client}>
            <RainbowKitProvider chains={chains}>
              <YinYangProvider>
                <Component {...pageProps} />
                <ToastContainer position="bottom-right" autoClose={5000} />
              </YinYangProvider>
            </RainbowKitProvider>
          </WagmiConfig>
        </ThemeProvider>
      ) : (
        <div className="w-screen h-screen flex">
          <FaYinYang className="w-48 h-48 animate-bounce m-auto" />
        </div>
      )}
    </>
  );
}

export default MyApp;
