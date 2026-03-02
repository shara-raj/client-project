export default function PasswordSettingsBlock() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-6">
      <h4 className="mb-4 font-medium">Change Password</h4>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm text-neutral-600">New password</label>
          <div className="mt-1 h-10 rounded-lg bg-neutral-100" />
        </div>

        <div>
          <label className="text-sm text-neutral-600">
            Confirm new password
          </label>
          <div className="mt-1 h-10 rounded-lg bg-neutral-100" />
        </div>
      </div>

      <button
        disabled
        className="mt-4 cursor-not-allowed rounded-lg bg-neutral-200 px-4 py-2 text-sm font-medium text-neutral-300"
      >
        Change Password
      </button>
    </section>
  );
}
