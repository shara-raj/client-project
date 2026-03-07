import { Outlet } from "react-router-dom";
import EditorSidebar from "@/modules/dashboard/editor/components/EditorSidebar";
import EditorHeader from "@/modules/dashboard/editor/components/EditorHeader";

const EditorLayout = () => {
  return (
    <div className="dashboard-theme min-h-screen flex bg-page">
      {/* Sidebar */}
      <EditorSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <EditorHeader />

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EditorLayout;
