import type { ReactNode } from "react";

interface EditorHeaderProps {
  title?: string;
  onMenuClick?: () => void;
  children?: ReactNode; // contextual actions slot
}

export function EditorHeader({
  title = "Overview",
  onMenuClick,
  children,
}: EditorHeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-neutral-200 px-4 md:px-6 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={onMenuClick}
          className="md:hidden h-9 w-9 rounded-md bg-neutral-200 flex items-center justify-center"
        >
          <span className="sr-only">Open sidebar</span>
          {/* icon placeholder */}
          <div className="h-5 w-5 bg-neutral-300 rounded" />
        </button>

        {/* Page title */}
        <h1 className="text-lg font-semibold text-neutral-900">{title}</h1>

        {/* Breadcrumb placeholder */}
        <div className="hidden lg:block text-sm text-neutral-500">
          {/* breadcrumb slot */}
        </div>
      </div>

      {/* Right */}
      <div className="ml-auto flex items-center gap-3">
        {/* Contextual actions */}
        {children}

        {/* Profile slot */}
        <div className="h-8 w-8 rounded-full bg-neutral-200" />
      </div>
    </header>
  );
}
