import { useState } from "react";
import { TableHero } from "../Table";
import { Card } from "@tremor/react";
import { stockHeaders } from "../tableData";
import Chart from "../Chart";
import propTypes from "prop-types";
import Pagination from "../Pagination";

function Stock({ stock, isLoading, error }) {
  const [page, setPage] = useState(1);
  const sym = stock.meta?.symbol;

  const limit = 5;
  const endIndex = page * limit;
  const startIndex = endIndex - limit;
  const records = stock.values?.slice(startIndex, endIndex);
  const numPage = Math.ceil(stock.values?.length / limit);

  console.log(error);

  if (isLoading)
    return <p className="text-tremor-default py-8 border">Loading...</p>;

  return (
    <div className="space-y-4">
      <Card className="mt-4">
        <h1 className="text-tremor-title font-sans font-semibold">{sym}</h1>
        {error && <span>{error}</span>}
        {!error && <Chart stockData={stock} color={["blue", "rose"]} />}
      </Card>
      <div className="w-fill py-2 text-sm font-semibold border-b">
        Information
      </div>
      <TableHero headers={stockHeaders} data={records} error={error} />
      <Pagination page={page} setPage={setPage} numPage={numPage} />
    </div>
  );
}

Stock.propTypes = {
  stock: propTypes.object.isRequired,
  isLoading: propTypes.bool.isRequired,
  error: propTypes.string,
};

export default Stock;
