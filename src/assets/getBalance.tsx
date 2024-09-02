import {
    clusterApiUrl,
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import React, { useState } from "react";

const SolanaBalanceChecker: React.FC = () => {

    const [balance, setBalance] = React.useState<number>(0);
    const [publicAdress, setPublicAdress] = useState<string>("");

    async function getBalance(e: React.FormEvent) {
        e.preventDefault();
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        let wallet = new PublicKey(publicAdress);
        const walletBalanceInstance = await connection.getBalance(wallet);
        setBalance(walletBalanceInstance / LAMPORTS_PER_SOL)
    }

    return <div>
        <h1>${balance ? balance : 0} SOL</h1>
        <form onSubmit={getBalance}>
            <input style={{ width: "300px", padding: "10px", marginBottom: "10px" }} type="text" placeholder="Public key" onChange={(e) => setPublicAdress(e.target.value)} />
            <br />
            <button type="submit">Get Balance</button>
        </form>
    </div>
};

export default SolanaBalanceChecker;