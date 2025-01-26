import { useState } from "react";
import { Card } from "@tremor/react";
import { TableHero } from "../Table";
import { cryptoHeaders } from "../tableData";
import propTypes from "prop-types";
import Chart from "../Chart";
import Pagination from "../Pagination";

function Crypto({ coin, isLoading, error }) {
  const [page, setPage] = useState(1);

  const limit = 5;
  const endIndex = page * limit;
  const startIndex = endIndex - limit;
  const records = coin.slice(startIndex, endIndex);
  const numPage = Math.ceil(coin.length / limit);
  //   const num = [...Array(numPage + 1).keys()].slice(1);

  if (isLoading)
    return <p className="text-tremor-default py-8 border">Loading...</p>;

  return (
    <div className="space-y-4">
      <Card className="mt-4">
        {error && <span>{error}</span>}
        {!error && <Chart color={["pink", "indigo"]} />}
      </Card>
      <div className="w-fill py-2 text-tremor-default font-semibold border-b">
        All
      </div>
      <TableHero headers={cryptoHeaders} data={records} error={error} />

      <Pagination page={page} setPage={setPage} numPage={numPage} />
    </div>
  );
}

Crypto.propTypes = {
  coin: propTypes.arrayOf(propTypes.object).isRequired,
  isLoading: propTypes.bool.isRequired,
  error: propTypes.string.isRequired,
};

export default Crypto;
