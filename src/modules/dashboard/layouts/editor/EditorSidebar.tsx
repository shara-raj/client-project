import { NavLink } from "react-router-dom";

export function EditorSidebar() {
  return (
    <aside
      className={
        "hidden md:flex md:w-20 lg:w-64 bg-white border-r border-neutral-200 flex-col transition-all duration-200"
      }
    >
      {/* Logo / Brand */}
      <div className="flex h-16 items-center px-6">
        <span className="text-base font-semibold text-neutral-900 hidden lg:inline">
          Editor Panel
        </span>
        <span className="lg:hidden">E P</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        {/* Overview */}
        <p className="mb-2 text-xs uppercase tracking-wide text-neutral-500 hidden lg:block">
          Overview
        </p>
        <SidebarLink to="/dashboard/editor" label="Dashboard" />

        {/* My Content */}
        <Section title="My Content">
          <SidebarLink to="/dashboard/editor/content/drafts" label="Drafts" />
          <SidebarLink to="/dashboard/editor/content/pending" label="Pending" />
          <SidebarLink
            to="/dashboard/editor/content/rejected"
            label="Rejected"
          />
          <SidebarLink
            to="/dashboard/editor/content/published"
            label="Published"
          />
        </Section>

        {/* Create */}
        <SidebarLink to="/dashboard/editor/create/new" label="Create" />

        {/* Media */}
        <SidebarLink to="/dashboard/editor/media/library" label="Media" />

        {/* Profile */}
        <SidebarLink to="/dashboard/editor/profile" label="Profile" />
      </nav>
    </aside>
  );
}

/* -------- Helper -------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-wide text-neutral-500 hidden lg:block">
        {title}
      </p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function SidebarLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `
        flex items-center rounded-md px-3 py-2 text-sm font-medium
        ${
          isActive
            ? "bg-neutral-100 text-neutral-900"
            : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
        }
        `
      }
    >
      {/* icon placeholder */}
      <span className="lg:hidden md:h-5 md:w-5 rounded bg-neutral-300 flex ">
        <p className="lg:hidden text-center w-full">{label.charAt(0)}</p>
      </span>
      <span className="hidden lg:inline">{label}</span>
    </NavLink>
  );
}
