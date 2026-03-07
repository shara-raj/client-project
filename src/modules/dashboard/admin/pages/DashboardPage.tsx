import SubscriberStats from "../components/SubscriberStats";
import HealingPathAnalytics from "../components/HealingPathAnalytics";
import { useAdminAnalytics } from "../hooks/useAdminAnalytics";

export default function DashboardPage() {
  const { editorActivity, loading } = useAdminAnalytics();
  return (
    <div className="dashboard-theme p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SubscriberStats />
        <HealingPathAnalytics />
      </div>

      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Editor Activity</h3>

        {loading ? (
          <div className="space-y-3 animate-pulse">
            <div className="h-4 bg-soft rounded"></div>
            <div className="h-4 bg-soft rounded"></div>
            <div className="h-4 bg-soft rounded"></div>
          </div>
        ) : (
          <ul className="space-y-2">
            {editorActivity.map((item, index) => (
              <li key={index} className="text-sub">
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
