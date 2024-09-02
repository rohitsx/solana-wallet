import React, { useMemo, useState } from 'react'
import { Keypair, Connection, PublicKey, clusterApiUrl } from '@solana/web3.js'
import './App.css'

function App() {
  const connection = useMemo(() => {
    const connectionInstance = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
    return connectionInstance;
  }, [])

  const keyPair = useMemo(() => {
    const keypair = Keypair.generate();
    return keypair
  }, [])

  const [publicKey, setPublicKey] = useState<string>(keyPair.publicKey.toString())
  const [balance, setBlance] = useState<number>(0)

  async function getBlance(e: React.FormEvent) {
    e.preventDefault();
    try {
      const publicKeyInstance = new PublicKey(publicKey);
      const balance = await connection.getBalance(publicKeyInstance);
      console.log(`Balance: ${balance / 1e9} SOL`);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  }

  return <div>
    <div>publickey: {keyPair.publicKey.toString()}</div>
    <div>

    </div>
    <div>
      <form onSubmit={getBlance}>
        <input type="text" onChange={(e) => setPublicKey(e.target.value)} />
        <button>Get Balance</button>
      </form>
    </div>
  </div>
}

export default App
