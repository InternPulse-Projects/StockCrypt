import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import propTypes from "prop-types";
import { useLocation } from "react-router";

export const TableHero = ({ headers, data, error }) => {
  const location = useLocation();

  const currLocation = location.pathname.includes("crypto");
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
        {currLocation ? (
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
        ) : (
          <TableBody>
            {data?.map((d, index) => (
              <TableRow key={index} className="text-tremor-default">
                <TableCell>{d.low}</TableCell>
                <TableCell>{d.high}</TableCell>
                <TableCell>{d.open}</TableCell>
                <TableCell>{d.close}</TableCell>
                <TableCell>{d.datetime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </div>
  );
};

TableHero.propTypes = {
  headers: propTypes.arrayOf(propTypes.string),
  data: propTypes.arrayOf(propTypes.object),
  error: propTypes.string,
};
