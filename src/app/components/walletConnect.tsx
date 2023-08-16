'use client';
import { ethers } from "ethers";
import React, { useState } from "react"; // Import React and useState
declare var window: any

async function connectWallet() {
    if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum)
        try {
            await provider.send("eth_requestAccounts", []);
        } catch (err) {
            console.log(err);
        }
        const signer = provider.getSigner()
        console.log("signer", signer)
        const address = (await signer).getAddress()
        console.log("address", address)
        return signer
    } else {
        console.log("No Ethereum browser detected.")
    }
}

const KodrConnect = () => {
    const [connected, setConnected] = useState(false); // state to track connection

    const handleConnectClick = async () => {
        const signer = await connectWallet();
        if (signer) {
            setConnected(true);
        }
    };

    // Render the game window if connected, otherwise render the connect button
    return (
        <div>
            {connected ? (
                <div style={{ width: "400px", height: "400px", backgroundColor: "gray" }}>
                    {/*TODO Replace this with game content */}
                    Game Content
                </div>
            ) : (
                <button onClick={handleConnectClick}>Connect Wallet</button>
            )}
        </div>
    );
}

export default KodrConnect;
