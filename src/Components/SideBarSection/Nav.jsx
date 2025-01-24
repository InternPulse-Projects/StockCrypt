import { NavLink } from "react-router";

function Nav() {
  return (
    <nav className="px-2 border-0">
      <NavLink
        to="dashboard"
        className={({ isActive }) =>
          isActive
            ? "w-full block bg-blue-500 text-white rounded-md px-2 py-2 text-sm"
            : "w-full block text-black rounded-md px-2 py-2 text-sm"
        }
      >
        Dashboard
      </NavLink>
    </nav>
  );
}

export default Nav;
