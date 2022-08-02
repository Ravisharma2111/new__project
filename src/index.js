import React from "react";
import ReactDOM from "react-dom/client";
import TransactionHistory from "./TransactionHistory"
import App from "./App";

import CompareWallets from "./CompareWallets";
import Stacking from "./Stacking"
import WalletAnalytics from "./WalletAnalytics"
import { BrowserRouter, Routes,Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<App />} />
    <Route  path='stacking' element={<Stacking />} />
    <Route  path='transactionhistory' element={<TransactionHistory />} />
    <Route  path='walletanalytics' element={<WalletAnalytics />} />
    <Route  path='comparewallets' element={<CompareWallets />} />
  </Routes>
  </BrowserRouter>
);
