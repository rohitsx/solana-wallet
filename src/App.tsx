import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SolanaBalanceChecker from './assets/getBalance';
import LandingPage from './assets/landingPage';
import './App.css'
function App() {
  React.useEffect(() => { }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-balance" element={<SolanaBalanceChecker />} />
        {/* <Route path="/get-transaction" element={<GetTransaction />} /> */}
        {/* <Route path="/send-solana" element={<SendSolana />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;