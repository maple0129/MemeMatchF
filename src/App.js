import logo from './logo.svg';
import './App.css';
import Navbar from './layout/Navbar';
import Landing from './pages/Landing';
import Tokenomics from './pages/MarketingCap';
import MarketingCap from './pages/Tokenomics';
import RewardPost from './pages/RewardPost';
import AboutTeam from './pages/AboutTeam';
import StayUpdated from './pages/StayUpdated';
import Roadmap from './pages/Roadmap';
import Footer from './layout/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

import {useEffect} from "react";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = 'QH11311K52VYTY58AU2FF4BJPXZ7WRR6QD'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Navbar />
        <Landing />
        
        <div className="overflow-hidden relative w-full flex flex-col justify-center bg-white z-20 py-10 items-center">
          <Tokenomics/>
          <RewardPost/>
          <MarketingCap/>
          <Roadmap/>
          <AboutTeam/>
          <StayUpdated/>
        </div>

        <Footer />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default App;
