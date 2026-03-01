import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/modules/auth";

import { DashboardLayout } from "../layouts/DashboardLayout";

import AdminDashboard from "../pages/admin/AdminDashboard";
import { UserDashboard } from "../pages/user/UserDashboard";
import AdminUIController from "../layouts/admin/AdminUIController";
import AdminEditorsPage from "../pages/admin/users/AdminEditorsPage";
import AdminFlagsPage from "../pages/admin/moderation/AdminFlagsPage";
import AdminReportsPage from "../pages/admin/moderation/AdminReportsPage";
import AdminMediaPage from "../pages/admin/media/AdminMediaPage";
import AdminSubscribersPage from "../pages/admin/users/AdminSubscribersPage";
import AdminSystemAlertsPage from "../pages/admin/system/AdminSystemAlertsPage";

//Editor Routes

import { EditorDashboard } from "../pages/editor/EditorDashboard";
import { DraftsPage } from "../pages/editor/content/DraftsPage";
import { PendingPage } from "../pages/editor/content/PendingPage";
import { RejectedPage } from "../pages/editor/content/RejectedPage";
import { PublishedPage } from "../pages/editor/content/PublishedPage";
import { EditorMediaPage } from "../pages/editor/media/EditorMediaPage";
import { EditorNewPostPage } from "../pages/editor/create/EditorNewPostPage";
import { EditorProfilePage } from "../pages/editor/profile/EditorProfilePage";
import { EditorUIController } from "../layouts/editor/EditorUIController";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        {/* ADMIN */}
        <Route path="admin" element={<ProtectedRoute requiredRole="admin" />}>
          <Route element={<AdminUIController />}>
            <Route index element={<AdminDashboard />} />
            {/* Moderation */}
            <Route path="moderation/reports" element={<AdminReportsPage />} />
            <Route path="moderation/flags" element={<AdminFlagsPage />} />

            {/* Users */}
            <Route
              path="users/subscribers"
              element={<AdminSubscribersPage />}
            />
            <Route path="users/editors" element={<AdminEditorsPage />} />

            {/* Media */}
            <Route path="media/library" element={<AdminMediaPage />} />

            {/* System */}
            <Route path="system/alerts" element={<AdminSystemAlertsPage />} />
          </Route>
        </Route>

        {/* EDITOR */}
        <Route path="editor" element={<ProtectedRoute requiredRole="editor" />}>
          <Route element={<EditorUIController />}>
            {/* Dashboard */}
            <Route index element={<EditorDashboard />} />

            {/* Content */}
            <Route path="content/drafts" element={<DraftsPage />} />
            <Route path="content/pending" element={<PendingPage />} />
            <Route path="content/rejected" element={<RejectedPage />} />
            <Route path="content/published" element={<PublishedPage />} />

            {/* Media (read-only) */}
            <Route path="media/library" element={<EditorMediaPage />} />

            {/* Create */}
            <Route path="create/new" element={<EditorNewPostPage />} />

            {/* Profile */}
            <Route path="profile" element={<EditorProfilePage />} />
          </Route>
        </Route>

        {/* USER */}
        {/* <Route path="user" element={<ProtectedRoute requiredRole="user" />}>
          <Route element={<UserLayout />}>
            <Route index element={<UserDashboard />} />
          </Route>
        </Route> */}
      </Route>
    </Routes>
  );
}
