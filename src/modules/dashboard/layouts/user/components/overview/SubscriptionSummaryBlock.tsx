import { Link } from "react-router-dom";

export default function SubscriptionSummaryBlock() {
  return (
    <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-900">Subscription</h3>

        <Link
          to="/dashboard/user/subscription"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Manage
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-neutral-600">Plan</p>
          <p className="font-medium text-neutral-900">Premium</p>
        </div>

        <div>
          <p className="text-sm text-neutral-600">Status</p>
          <p className="font-medium text-green-600">Active</p>
        </div>
      </div>
    </section>
  );
}
