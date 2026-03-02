import { Outlet } from "react-router-dom";
import UserHeader from "./components/UserHeader";
import UserNavTabs from "./components/UserNavTabs";

export default function UserLayout() {
  return (
    <section className="min-h-screen bg-neutral-50 text-neutral-900">
      <UserHeader />
      <UserNavTabs />

      <main className="mx-auto max-w-7xl px-4 py-6">
        <Outlet />
      </main>
    </section>
  );
}
