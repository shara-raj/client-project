import { NavLink } from "react-router-dom";
import { useState } from "react";

type Tab = {
  label: string;
  to: string;
};

export default function UserMobileNav({ tabs }: { tabs: Tab[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Toggle */}
      <div className="flex items-center justify-between py-4">
        <span className="text-sm font-medium text-neutral-900">Menu</span>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md border border-neutral-300 px-3 py-1 text-sm text-neutral-700"
        >
          {open ? "Close" : "Open"}
        </button>
      </div>

      {/* Dropdown */}
      {open && (
        <ul className="flex flex-col gap-2 pb-4">
          {tabs.map((tab) => (
            <li key={tab.to}>
              <NavLink
                to={tab.to}
                onClick={() => setOpen(false)}
                end
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
