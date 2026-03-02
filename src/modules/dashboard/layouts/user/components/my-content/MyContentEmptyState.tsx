export default function MyContentEmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-neutral-200 p-10 text-center">
      <h3 className="text-lg font-medium">No active healing paths</h3>
      <p className="mt-2 text-sm text-neutral-600">
        Start a healing path to track your progress here.
      </p>
    </div>
  );
}
