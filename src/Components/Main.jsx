import { Outlet } from "react-router";

function Main() {
  return (
    <main className="space-y-0 border">
      <Outlet />
    </main>
  );
}

export default Main;
