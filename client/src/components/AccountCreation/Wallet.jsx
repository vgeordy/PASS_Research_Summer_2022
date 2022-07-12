import React from 'react'

const Wallet = () => {

const handleConnection = () => {
    if (!window.ethereum) {
        alert("Get MetaMask!");
        return;
      }
    
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    
      console.log(accounts[0])
  }

  return (
    <button onClick={handleConnection}>Connect to wallet</button>
  )
}

export default Wallet;