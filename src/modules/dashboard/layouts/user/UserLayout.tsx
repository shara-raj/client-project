import { Outlet } from "react-router-dom";

export function UserLayout() {
  return (
    <section className="p-6">
      {/* user navigation later */}
      <Outlet />
    </section>
  );
}
