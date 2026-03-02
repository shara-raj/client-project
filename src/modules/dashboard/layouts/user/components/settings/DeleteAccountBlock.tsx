export default function DeleteAccountBlock() {
  return (
    <section className="rounded-2xl border border-red-600/60 bg-white">
      <h4 className="mb-2 font-medium text-red-400">Delete Account</h4>
      <p className="mb-4 text-sm text-red-300">
        Permanently delete your account and all associated data. This action
        cannot be undone.
      </p>
      <button
        disabled
        className="cursor-not-allowed bg-red-600/70 px-4 py-2 rounded-lg text-white"
      >
        Delete Account
      </button>
    </section>
  );
}
