export default function CurrentPlanBlock() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-6">
      <h4 className="mb-4 font-medium">Current Plan</h4>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-neutral-600">Plan</p>
          <p className="font-medium">Premium</p>
        </div>
        <div>
          <p className="text-sm text-neutral-600">Billing</p>
          <p className="font-medium">Monthly</p>
        </div>
        <div>
          <p className="text-sm text-neutral-600">Next Renewal</p>
          <p className="mt-1 text-base font-medium">—</p>
        </div>

        <div>
          <p className="text-sm text-neutral-600">Status</p>
          <span className="mt-1 inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-500">
            Active
          </span>
        </div>
      </div>
    </section>
  );
}
