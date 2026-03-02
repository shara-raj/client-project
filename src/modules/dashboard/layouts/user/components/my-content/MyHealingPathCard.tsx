export default function MyHealingPathCard() {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5">
      <div>
        <h4 className="mb-2 font-medium">Healing Path Title</h4>
        <p className="mb-4 text-sm text-neutral-600">
          Short description of the healing path goes here to explain what the
          user is working on.
        </p>
      </div>

      <button
        className={
          "mt-4 rounded-lg px-4 py-2 text-sm font-medium transition border border-neutral-700 cursor-pointer bg-white text-black hover:bg-neutral-200"
        }
      >
        Resume
      </button>
    </div>
  );
}
