import { useAdminAnalytics } from "../hooks/useAdminAnalytics";
import HealingPathAnalytics from "../components/HealingPathAnalytics";

export default function AnalyticsPage() {
  const { subscribers, loading } = useAdminAnalytics();

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h2 className="text-lg font-semibold text-main">Analytics</h2>
        <p className="text-sm text-sub">
          Platform insights and engagement metrics
        </p>
      </div>

      {/* Subscriber Stats */}
      <div className="card p-6">
        <h3 className="text-main font-semibold mb-4">Total Subscribers</h3>

        {loading ? (
          <div className="animate-pulse h-8 w-40 bg-soft rounded"></div>
        ) : (
          <div className="text-3xl font-bold text-main">{subscribers}</div>
        )}

        <p className="text-sm text-muted mt-2">
          Registered users across the platform
        </p>
      </div>

      {/* Healing Path Popularity */}
      <HealingPathAnalytics />

      {/* Editor Activity */}
      <div className="card p-6">
        <h3 className="text-main font-semibold mb-4">Editor Activity</h3>

        <p className="text-sub text-sm">
          Editor engagement metrics will appear here.
        </p>
      </div>
    </div>
  );
}
