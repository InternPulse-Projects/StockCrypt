import { NavLink } from "react-router";

function StockCryptNav() {
  return (
    <nav className="w-full flex flex-row space-x-4 text-sm font-sans border-b">
      <NavLink
        to="crypto"
        className={({ isActive }) =>
          isActive
            ? "w-fit px-0.5 py-1 font-semibold rounded-sm border-b-2 border-blue-500"
            : "w-fit px-0.5 py-1 font-semibold"
        }
      >
        Crypto
      </NavLink>
      <NavLink
        to="stocks"
        className={({ isActive }) =>
          isActive
            ? "w-fit px-0.5 py-1 font-semibold rounded-sm border-b-2 border-blue-500"
            : "w-fit px-0.5 py-1 font-semibold"
        }
      >
        Stocks
      </NavLink>
    </nav>
  );
}

export default StockCryptNav;
