import React from 'react';
import ReactDOM from 'react-dom/client';
import MediaQuery from 'react-responsive';



import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { HomePageDesign } from "./screens/HomePageDesign";
import { Main } from "./screens/Main";

import { WagmiConfig, configureChains, mainnet } from 'wagmi'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { useAccount, useConnect, useEnsName, useDisconnect } from 'wagmi'
 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { sepolia } from 'viem/chains';
 
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const projectId = '2e3183c3eb86ddd88d13ca929648e49d'

// Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: '5hYMH_hHRKucFa33M50ENvqFIr1oJP7N' }), publicProvider()],
)

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
 
// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <WagmiConfig config={wagmiConfig}>
    <div>
      <MediaQuery minWidth={768}>
        {/* You can also use a function (render prop) as a child */}
        {(matches) =>
        matches
        ? <HomePageDesign />
        : <Main />
        }
        </MediaQuery>
    </div>
  </WagmiConfig>


);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
