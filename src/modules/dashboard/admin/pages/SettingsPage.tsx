import { useState } from "react";

export default function SettingsPage() {
  const [siteName, setSiteName] = useState("My CMS");
  const [adminEmail, setAdminEmail] = useState("admin@cms.com");
  const [requireReview, setRequireReview] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h2 className="text-lg font-semibold text-main">Settings</h2>

        <p className="text-sm text-sub">
          Manage system configuration and platform settings
        </p>
      </div>

      {/* GENERAL SETTINGS */}
      <div className="card p-6 space-y-4">
        <h3 className="text-main font-semibold">General Settings</h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-sub">Site Name</label>

            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="mt-1 w-full border-main rounded-md px-3 py-2 text-sm bg-page"
            />
          </div>

          <div>
            <label className="text-sm text-sub">Admin Email</label>

            <input
              type="email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              className="mt-1 w-full border-main rounded-md px-3 py-2 text-sm bg-page"
            />
          </div>
        </div>
      </div>

      {/* CONTENT SETTINGS */}
      <div className="card p-6 space-y-4">
        <h3 className="text-main font-semibold">Content Settings</h3>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-main">Require Post Review</p>

            <p className="text-xs text-muted">
              Editors must submit posts for admin approval
            </p>
          </div>

          <input
            type="checkbox"
            checked={requireReview}
            onChange={() => setRequireReview(!requireReview)}
          />
        </div>
      </div>

      {/* SYSTEM SETTINGS */}
      <div className="card p-6 space-y-4">
        <h3 className="text-main font-semibold">System Settings</h3>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-main">Maintenance Mode</p>

            <p className="text-xs text-muted">
              Temporarily disable public access to the website
            </p>
          </div>

          <input
            type="checkbox"
            checked={maintenanceMode}
            onChange={() => setMaintenanceMode(!maintenanceMode)}
          />
        </div>
      </div>

      {/* SAVE BUTTON */}
      <div>
        <button className="btn-prime text-white px-5 py-2 rounded-lg text-sm font-medium">
          Save Settings
        </button>
      </div>
    </div>
  );
}
