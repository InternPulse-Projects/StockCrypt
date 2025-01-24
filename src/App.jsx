import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import AppLayout from "./Pages/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Stock from "./Components/DashboardContent/Stock";
import Crypto from "./Components/DashboardContent/Crypto";

function App() {
  const [coin, setCoin] = useState([]);
  const [error, setError] = useState("");
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const apikey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchCrypto = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": `${apikey}`,
        },
      };

      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      )
        .then((res) => res.json())
        .then((res) => setCoin(res))
        .catch(() => setError("Something went wrong"));
    };
    fetchCrypto();
  }, [currency.name, apikey]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="stocks" element={<Stock />} />
            <Route
              path="crypto"
              element={<Crypto coin={coin} error={error} />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
