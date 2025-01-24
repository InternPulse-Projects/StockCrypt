import { useState } from "react";
import { Card } from "@tremor/react";
import { TableHero } from "../Table";
import { cryptoHeaders } from "../tableData";
import propTypes from "prop-types";
import Chart from "../Chart";
import Pagination from "../Pagination";

function Crypto({ coin, error }) {
  const cryptoData = [
    {
      date: "Jan 23",
      Bitcoin: 289,
    },
    {
      date: "Feb 23",
      Bitcoin: 283,
    },
    {
      date: "Mar 5",
      Bitcoin: 100,
    },
    {
      date: "May 15",
      Bitcoin: 120,
    },
    {
      date: "July 2",
      Bitcoin: 80,
    },
  ];

  const [page, setPage] = useState(1);

  const limit = 5;
  const endIndex = page * limit;
  const startIndex = endIndex - limit;
  const records = coin.slice(startIndex, endIndex);
  const numPage = Math.ceil(coin.length / limit);
  const num = [...Array(numPage + 1).keys()].slice(1);

  return (
    <div className="space-y-4">
      <Card className="mt-4">
        <Chart data={cryptoData} color="indigo" />
      </Card>
      <div className="w-fill py-2 text-tremor-default font-semibold border-b">
        All
      </div>
      <TableHero headers={cryptoHeaders} data={records} error={error} />

      <Pagination page={page} setPage={setPage} numPage={numPage} num={num} />
    </div>
  );
}

Crypto.propTypes = {
  coin: propTypes.arrayOf(propTypes.object).isRequired,
  error: propTypes.string.isRequired,
};

export default Crypto;
