import { Card } from "@tremor/react";
import Chart from "../Chart";
import { TableHero } from "../Table";

function Stock() {
  const stockData = [
    {
      date: "Jan 23",
      "Route Requests": 289,
    },
    {
      date: "Feb 23",
      "Route Requests": 283,
    },
    {
      date: "Mar 5",
      "Route Requests": 100,
    },
    {
      date: "May 15",
      "Route Requests": 120,
    },
    {
      date: "July 2",
      "Route Requests": 80,
    },
  ];
  return (
    <div className="space-y-4">
      <Card className="mt-4">
        <Chart data={stockData} color="rose" />
      </Card>
      <div className="w-fill py-2 text-sm font-semibold border-b">Tabs</div>
      {/* <TableHero /> */}
    </div>
  );
}

export default Stock;
