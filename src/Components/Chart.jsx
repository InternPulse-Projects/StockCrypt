import { AreaChart } from "@tremor/react";
import propTypes from "prop-types";

function Chart({ data, color }) {
  return (
    <AreaChart
      className="mt-2 h-80 rounded-md"
      data={data}
      colors={[color]}
      categories={["Bitcoin"]}
      index="date"
      yAxisWidth={33}
    />
  );
}

Chart.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  color: propTypes.string.isRequired,
};

export default Chart;
