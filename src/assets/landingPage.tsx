import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    React.useEffect(() => { }, [])
    return (
        <div className="landing-page">
            <h1>Welcome to Solana App</h1>
            <p>Choose an action:</p>
            <ul>
                <li>
                    <Link to="/get-balance">Get Balance</Link>
                </li>
                <li>
                    <Link to="/get-transaction">Get Transaction</Link>
                </li>
                <li>
                    <Link to="/send-solana">Send Solana</Link>
                </li>
            </ul>
        </div>
    );
}

export default LandingPage;