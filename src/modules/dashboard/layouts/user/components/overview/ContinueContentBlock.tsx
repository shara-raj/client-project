import MyHealingPathCard from "../my-content/MyHealingPathCard";
import { Link } from "react-router-dom";

export default function ContinueContentBlock() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-900">
          Continue Your Content
        </h3>

        <Link
          to="/dashboard/user/my-content"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View All
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <MyHealingPathCard />
        <MyHealingPathCard />
      </div>
    </section>
  );
}
