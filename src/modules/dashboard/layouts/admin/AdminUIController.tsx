import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminContentSurface from "./AdminContentSurface";
import AdminMobileNavPanel from "./components/AdminMobileNavPanel";

export default function AdminUIController() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-neutral-100">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader
          title="Admin Dashboard"
          breadcrumb={<span>Dashboard</span>}
          onMobileMenuClick={() => setIsMobileNavOpen(true)}
          profile={
            <div className="h-8 w-8 rounded-full bg-neutral-300 flex items-center justify-center text-xs">
              A
            </div>
          }
        />

        <AdminContentSurface>
          <Outlet />
        </AdminContentSurface>
      </div>

      <AdminMobileNavPanel
        open={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </div>
  );
}
