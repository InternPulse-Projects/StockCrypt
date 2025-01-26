import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import AppLayout from "./Pages/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Stock from "./Components/DashboardContent/Stock";
import Crypto from "./Components/DashboardContent/Crypto";

function App() {
  const [search, setSearch] = useState("");
  const [coin, setCoin] = useState([]);
  const [stock, setStock] = useState({});
  const [coinError, setCoinError] = useState("");
  const [stockError, setStockError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [currency] = useState({
    name: "usd",
    symbol: "$",
  });

  const [symbol, setSymbol] = useState({
    sym: "EUR/USD",
    symbol: "EURUSD",
  });

  function handleSymbol() {
    setSymbol({ ...symbol, sym: search });
  }

  const stockurl = import.meta.env.VITE_STOCK_URL;
  const apikey = import.meta.env.VITE_API_KEY;
  const stockapikey = import.meta.env.VITE_STOCK_API_KEY;

  useEffect(() => {
    const fetchCrypto = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": `${apikey}`,
        },
      };

      setIsLoading(true);

      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      )
        .then((res) => res.json())
        .then((res) => {
          setCoin(res);
          setIsLoading(false);
        })
        .catch(() => setCoinError(""));
    };
    fetchCrypto();
  }, [currency.name, apikey]);

  useEffect(
    function () {
      const controller = new AbortController();
      const fetchStock = async () => {
        try {
          setIsLoading(true);
          const res = await fetch(
            `${stockurl}?apikey=${stockapikey}&interval=1day&format=JSON&symbol=${symbol.sym}`,

            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong while fetching data");

          const data = await res.json();

          console.log(data);
          if (data.status === "error") return setStockError(data.status);

          setStock(data);
          setIsLoading(false);
          setStockError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setStockError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      };
      fetchStock();
    },
    [stockurl, stockapikey, symbol.sym]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route
            path="dashboard"
            element={
              <Dashboard
                search={search}
                setSearch={setSearch}
                setSymbol={setSymbol}
                onClick={handleSymbol}
              />
            }
          >
            <Route index element={<Navigate replace to="stocks" />} />
            <Route
              path="stocks"
              element={
                <Stock stock={stock} isLoading={isLoading} error={stockError} />
              }
            />
            <Route
              path="crypto"
              element={
                <Crypto coin={coin} isLoading={isLoading} error={coinError} />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
