import { AreaChart } from "@tremor/react";
import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Chart({ stockData, color }) {
  const [coinId, setCoinId] = useState([]);

  const location = useLocation();

  const currLocation = location.pathname.includes("crypto");

  const value = stockData?.values;
  let reversedData;

  if (Array.isArray(value)) {
    const sortedValues = value.sort(
      (a, b) => new Date(a.datetime) - new Date(b.datetime)
    );
    reversedData = sortedValues;
  }

  const apikey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchCryptoById = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": `${apikey}`,
        },
      };

      fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7",
        options
      )
        .then((res) => res.json())
        .then((res) => {
          const transformedData = res.prices.map(([timestamp, price]) => ({
            time: new Date(timestamp).toLocaleDateString(),
            price,
          }));
          setCoinId(transformedData);
        })

        .catch(() => console.log("Something went wrong"));
    };
    fetchCryptoById();
  }, [apikey]);

  return (
    <>
      {!currLocation ? (
        <AreaChart
          className="mt-2 h-80 rounded-md"
          data={reversedData}
          colors={color}
          categories={["low", "high"]}
          index="datetime"
          yAxisWidth={33}
        />
      ) : (
        <AreaChart
          className="mt-2 h-80 rounded-md"
          data={coinId}
          colors={color}
          categories={["price"]}
          index="time"
          yAxisWidth={33}
        />
      )}
    </>
  );
}

Chart.propTypes = {
  stockData: propTypes.object,
  color: propTypes.array.isRequired,
};

export default Chart;
