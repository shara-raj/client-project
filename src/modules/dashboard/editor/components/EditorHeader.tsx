const EditorHeader = () => {
  return (
    <header className="h-16 bg-card border-b border-main flex items-center justify-between px-6">
      <div>
        <h1 className="text-lg font-semibold text-main">Editor Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-sub">Editor</span>

        <button className="btn-secondary text-white px-3 py-1 rounded-md text-sm">
          Logout
        </button>
      </div>
    </header>
  );
};

export default EditorHeader;
