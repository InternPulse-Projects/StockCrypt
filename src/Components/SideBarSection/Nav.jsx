import { NavLink } from "react-router";

function Nav() {
  return (
    <nav
      className="px-2 space-y-2 max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-between
      border-0"
    >
      <h1
        className="text-xl font-sans font-bold bg-gradient-to-r from-red-400 to-blue-500 
        text-transparent bg-clip-text"
      >
        STOCKCRYPT
      </h1>
      <NavLink
        to="dashboard"
        className={({ isActive }) =>
          isActive
            ? "w-full block bg-blue-500 text-white rounded-md px-2 py-2 text-sm max-sm:w-fit"
            : "w-full block text-black rounded-md px-2 py-2 text-sm  max-sm:w-fit"
        }
      >
        Dashboard
      </NavLink>
    </nav>
  );
}

export default Nav;
