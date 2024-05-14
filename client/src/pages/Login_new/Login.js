import React, { useState } from "react";
import "./Login.css";
import { useEffect } from "react";
import { ethers } from "ethers";
import { useHistory } from 'react-router-dom'

function Login({setGlobalProvider}) {
    const history = useHistory();
  const [hasehet, setHasehet] = useState(false);

  async function connectWallet() {
    try {
      // Connect to MetaMask wallet
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      // Get the connected wallet address
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setGlobalProvider(provider);
      history.push('/');
      console.log("Connected wallet address:", address);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      console.log("MetaMask is installed!");
      setHasehet(true);
    } else {
      console.log("MetaMask is not installed.");
      setHasehet(false);
    }
  }, []);

  return (
    <div className="login">
      <div className="login_main">
        <h2 className="login_heading">Log in with your wallet </h2>
        <div className="login_wallets">
          <div className="login_wallet" onClick={connectWallet}>
            <img src="/MetaMask_Fox.svg.png" alt="" />
            <div>
              <p className="login_walletText">Metamask</p>
            </div>
          </div>
          <div className="login_wallet">
            <img src="/unnamed.png" alt="" />
            <div>
              <p className="login_walletText">Crypto Wallet</p>
            </div>
          </div>
          <div className="login_wallet">
            <img src="/Exodus_Logo.jpg" alt="" />
            <div>
              <p className="login_walletText">Exodus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
