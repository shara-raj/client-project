export default function SubscriptionActions() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-6">
      <h4 className="mb-4 font-medium">Actions</h4>
      <div className="flex gap-4">
        <button
          disabled
          className="cursor-not-allowed bg-neutral-200 px-4 py-2 rounded-lg"
        >
          Upgrade
        </button>
        <button
          disabled
          className="cursor-not-allowed border border-neutral-700 px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </section>
  );
}
