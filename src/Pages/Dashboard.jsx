import { Outlet, useLocation } from "react-router";
import Searchbox from "../Components/DashboardContent/Searchbox";
import { useEffect, useState } from "react";
import StockCryptNav from "../Components/StockCryptNav/StockCryptNav";

function Dashboard() {
  const [breadCrumb, setBreadCrumb] = useState("");
  const location = useLocation();
  const lenLocation = location.pathname.length;

  const currLocation = location.pathname
    .split("")
    .slice(1, lenLocation)
    .join("");

  // const newCurr =
  //   currLocation.charAt(0).toLocaleUpperCase() + currLocation.slice(1);
  const newCurr = currLocation;

  useEffect(() => {
    setBreadCrumb(newCurr);
  }, [newCurr]);
  return (
    <section className="h-full px-4 py-2 border">
      <Searchbox />
      <h1 className="text-tremor-metric font-semibold py-4 font-sans">
        {breadCrumb}
      </h1>

      <StockCryptNav />
      <Outlet />
    </section>
  );
}

export default Dashboard;
