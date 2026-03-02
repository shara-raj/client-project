export default function EmailSettingsBlock() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-6">
      <h4 className="mb-4 font-medium">Email</h4>

      <div>
        <label className="text-sm text-neutral-600">Email address</label>
        <div className="mt-1 h-10 w-full rounded-lg bg-neutral-100" />
      </div>

      <button
        disabled
        className="mt-4 cursor-not-allowed rounded-lg bg-neutral-200 px-4 py-2 text-sm font-medium text-neutral-300"
      >
        Update Email
      </button>
    </section>
  );
}
