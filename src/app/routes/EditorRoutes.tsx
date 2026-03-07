import { Route } from "react-router-dom";
import EditorLayout from "@/app/layouts/EditorLayout";

import DashboardPage from "@/modules/dashboard/editor/pages/DashboardPage";
import MyPostsPage from "@/modules/dashboard/editor/pages/MyPostsPage";
import RejectedPostsPage from "@/modules/dashboard/editor/pages/RejectedPostsPage";
import DeletionRequestsPage from "@/modules/dashboard/editor/pages/DeletionRequestsPage";
import SettingsPage from "@/modules/dashboard/editor/pages/SettingsPage";

export function EditorRoutes() {
  return (
    <Route path="/editor" element={<EditorLayout />}>
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="posts" element={<MyPostsPage />} />
      <Route path="rejected" element={<RejectedPostsPage />} />
      <Route path="deletion-requests" element={<DeletionRequestsPage />} />
      <Route path="settings" element={<SettingsPage />} />
    </Route>
  );
}
