import AdminMetricCard from "@/modules/dashboard/components/admin/ui-primitives/AdminMetricCard";
import AdminCard from "@/modules/dashboard/components/admin/ui-primitives/AdminCard";
import AdminBadge from "@/modules/dashboard/components/admin/ui-primitives/AdminBadge";
import AdminButton from "@/modules/dashboard/components/admin/ui-primitives/AdminButton";

export default function AdminDashboard() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
      {/* Subscriber Metrics Row */}
      <div className="xl:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <AdminMetricCard
          label="Total Subscribers"
          value="1,284"
          trend="+12% this month"
        />
        <AdminMetricCard
          label="Active Subscriptions"
          value="1,102"
          trend="+4% this week"
        />
        <AdminMetricCard
          label="Churn Rate"
          value="3.2%"
          trend="-0.8% improvement"
        />
      </div>

      {/* Editorial Metrics Row */}
      <div className="xl:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <AdminMetricCard label="Total Posts" value="842" />
        <AdminMetricCard label="Pending Reviews" value="12" />
        <AdminMetricCard label="Published This Week" value="34" />
      </div>

      {/* Moderation Summary */}
      <div className="xl:col-span-6">
        <AdminCard
          title="Moderation Overview"
          actions={<AdminButton variant="secondary">View All</AdminButton>}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Open Reports</span>
              <AdminBadge variant="warning">5</AdminBadge>
            </div>
            <div className="flex items-center justify-between">
              <span>Flagged Content</span>
              <AdminBadge variant="danger">3</AdminBadge>
            </div>
            <div className="flex items-center justify-between">
              <span>Resolved Today</span>
              <AdminBadge variant="success">18</AdminBadge>
            </div>
          </div>
        </AdminCard>
      </div>

      {/* System Alerts */}
      <div className="xl:col-span-6">
        <AdminCard title="System Alerts">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Server Load</span>
              <AdminBadge variant="success">Normal</AdminBadge>
            </div>
            <div className="flex items-center justify-between">
              <span>Storage Usage</span>
              <AdminBadge variant="warning">78%</AdminBadge>
            </div>
            <div className="flex items-center justify-between">
              <span>Payment Gateway</span>
              <AdminBadge variant="success">Operational</AdminBadge>
            </div>
          </div>
        </AdminCard>
      </div>

      {/* Activity Feed */}
      <div className="xl:col-span-12">
        <AdminCard title="Recent Activity">
          <ul className="divide-y">
            <li className="py-3 flex justify-between text-sm">
              <span>New subscriber joined</span>
              <span className="text-neutral-500">2 min ago</span>
            </li>
            <li className="py-3 flex justify-between text-sm">
              <span>Post submitted for review</span>
              <span className="text-neutral-500">10 min ago</span>
            </li>
            <li className="py-3 flex justify-between text-sm">
              <span>Report marked as resolved</span>
              <span className="text-neutral-500">30 min ago</span>
            </li>
          </ul>
        </AdminCard>
      </div>
    </section>
  );
}
