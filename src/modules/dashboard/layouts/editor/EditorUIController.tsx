import { useState } from "react";
import { Outlet } from "react-router-dom";
import { EditorSidebar } from "./EditorSidebar";
import { EditorHeader } from "./EditorHeader";
import { EditorContentSurface } from "./EditorContentSurface";
import { EditorMobileNavPanel } from "./EditorMobileNavPanel";

export function EditorUIController() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-neutral-100">
      <EditorSidebar />

      <div className="flex flex-1 flex-col">
        <EditorHeader
          title="Editor Dashboard"
          onMenuClick={() => setIsMobileNavOpen(true)}
        />
        <EditorContentSurface>
          <Outlet />
        </EditorContentSurface>
      </div>

      <EditorMobileNavPanel
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </div>
  );
}
