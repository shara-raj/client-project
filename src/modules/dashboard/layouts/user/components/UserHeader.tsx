import { useAuth } from "@/modules/auth";

export default function UserHeader() {
  const { logout } = useAuth();
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <div>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <p className="mt-1 text-sm text-neutral-600">
            Track your healing journey
          </p>
        </div>
        <button
          className="rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-200"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
