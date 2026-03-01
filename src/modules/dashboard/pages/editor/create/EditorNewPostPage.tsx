export function EditorNewPostPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
      {/* Main editor canvas */}
      <div className="xl:col-span-8">
        <div className="rounded-xl border bg-white p-6 space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <div className="h-4 w-24 rounded bg-neutral-200" />
            <div className="h-12 w-full rounded-md bg-neutral-100" />
          </div>

          {/* Editor body */}
          <div className="space-y-2">
            <div className="h-4 w-32 rounded bg-neutral-200" />
            <div className="h-64 w-full rounded-md bg-neutral-100" />
          </div>
        </div>
      </div>

      {/* Right meta panel */}
      <div className="xl:col-span-4 space-y-6">
        {/* Submission card */}
        <div className="rounded-xl border bg-white p-6 space-y-4">
          <h3 className="text-sm font-medium text-neutral-600">Submission</h3>

          <div className="space-y-3">
            <MetaRow />
            <MetaRow />
          </div>

          <div className="pt-4">
            <div className="h-10 w-full rounded-md bg-neutral-300" />
          </div>
        </div>

        {/* Post settings */}
        <div className="rounded-xl border bg-white p-6 space-y-4">
          <h3 className="text-sm font-medium text-neutral-600">
            Post Settings
          </h3>

          <div className="space-y-3">
            <MetaRow />
            <MetaRow />
            <MetaRow />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetaRow() {
  return (
    <div className="flex items-center justify-between">
      <div className="h-4 w-32 rounded bg-neutral-200" />
      <div className="h-4 w-20 rounded bg-neutral-100" />
    </div>
  );
}
