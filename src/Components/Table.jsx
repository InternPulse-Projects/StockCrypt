import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import propTypes from "prop-types";

export const TableHero = ({ headers, data, error }) => {
  console.log(error);
  return (
    <div className="w-full mx-auto">
      {error && (
        <span className="w-full text-tremor-label font-semibold px-2 py-4 rounded-md">
          {error.error}
        </span>
      )}
      <Table>
        <TableHead className="bg-slate-100 text-tremor-default rounded-md py-0.5">
          <TableRow>
            {headers?.map((heads) => (
              <TableHeaderCell key={heads}>{heads}</TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.map((d) => (
            <TableRow key={d.id} className="text-tremor-default">
              <TableCell className="flex flex-row gap-x-3 items-center">
                <img src={d.image} alt={d.name} width={25} />
                {d.name}
              </TableCell>
              <TableCell>{d.price_change_24h}</TableCell>
              <TableCell>{d.market_cap}</TableCell>
              <TableCell>{d.market_cap_change_24h}</TableCell>
              <TableCell>{d.total_volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

TableHero.propTypes = {
  headers: propTypes.arrayOf(propTypes.string),
  data: propTypes.arrayOf(propTypes.object),
  error: propTypes.string,
};
