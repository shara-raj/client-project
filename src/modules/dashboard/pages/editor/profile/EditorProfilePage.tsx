export function EditorProfilePage() {
  return (
    <div className="max-w-3xl">
      <div className="rounded-xl border bg-white p-6">
        <h2 className="text-lg font-semibold text-neutral-900">Profile</h2>

        <p className="mt-1 text-sm text-neutral-600">
          Manage your personal information and account details.
        </p>

        <div className="mt-6 space-y-6">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-neutral-200" />
            <div className="space-y-2">
              <div className="h-4 w-32 rounded bg-neutral-200" />
              <div className="h-3 w-40 rounded bg-neutral-100" />
            </div>
          </div>

          {/* Form fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldSkeleton />
            <FieldSkeleton />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldSkeleton />
            <FieldSkeleton />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <div className="h-9 w-24 rounded-md bg-neutral-200" />
            <div className="h-9 w-32 rounded-md bg-neutral-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function FieldSkeleton() {
  return (
    <div className="space-y-2">
      <div className="h-3 w-24 rounded bg-neutral-200" />
      <div className="h-9 w-full rounded-md bg-neutral-100" />
    </div>
  );
}
