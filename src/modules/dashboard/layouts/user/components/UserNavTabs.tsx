import { NavLink } from "react-router-dom";
import UserMobileNav from "./navigation/UserMobileNav";

const tabs = [
  { label: "Overview", to: "/dashboard/user" },
  { label: "My Content", to: "/dashboard/user/my-content" },
  { label: "Healing Paths", to: "/dashboard/user/healing-paths" },
  { label: "Subscription", to: "/dashboard/user/subscription" },
  { label: "Settings", to: "/dashboard/user/settings" },
];

export default function UserNavTabs() {
  return (
    <nav className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Mobile Nav */}
        <UserMobileNav tabs={tabs} />

        {/* Desktop Nav */}
        <ul className="hidden gap-6 md:flex">
          {tabs.map((tab) => (
            <li key={tab.to}>
              <NavLink
                to={tab.to}
                end
                className={({ isActive }) =>
                  `inline-block py-4 text-sm font-medium transition ${
                    isActive
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-neutral-500 hover:text-neutral-800"
                  }`
                }
              >
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
