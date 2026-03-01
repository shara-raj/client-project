import { NavLink } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function EditorMobileNavPanel({ isOpen, onClose }: Props) {
  if (!isOpen) return null;
  return (
    <div className={"fixed inset-0 z-40 md:hidden"}>
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Panel */}
      <aside
        className={`
          absolute left-0 top-0 h-full w-72 bg-white border-r border-neutral-200
          transition-transform duration-300
        `}
      >
        <div className="h-16 px-6 flex items-center justify-between border-b font-semibold">
          Editor Menu
          <button onClick={onClose} className="text-sm">
            ✕
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <MobileLink
            to="/dashboard/editor"
            label="Overview"
            onClose={onClose}
          />
          <MobileLink
            to="/dashboard/editor/content/drafts"
            label="Drafts"
            onClose={onClose}
          />
          <MobileLink
            to="/dashboard/editor/content/pending"
            label="Pending"
            onClose={onClose}
          />
          <MobileLink
            to="/dashboard/editor/content/rejected"
            label="Rejected"
            onClose={onClose}
          />
          <MobileLink
            to="/dashboard/editor/content/published"
            label="Published"
            onClose={onClose}
          />
          <MobileLink
            to="/dashboard/editor/create/new"
            label="Create"
            onClose={onClose}
          />
          <MobileLink
            to="/dashboard/editor/media/library"
            label="Media"
            onClose={onClose}
          />
          <MobileLink
            to="/dashboard/editor/profile"
            label="Profile"
            onClose={onClose}
          />
        </nav>
      </aside>
    </div>
  );
}

function MobileLink({
  to,
  label,
  onClose,
}: {
  to: string;
  label: string;
  onClose: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClose}
      className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
    >
      {label}
    </NavLink>
  );
}
