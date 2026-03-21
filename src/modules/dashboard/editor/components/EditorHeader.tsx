import { useNavigate } from "react-router-dom";

const EditorHeader = () => {
  const navigate = useNavigate();

  function handleLogout() {
    // Clear auth state and redirect to login
    navigate("/auth/login");
  }
  return (
    <header className="h-16 bg-card border-b border-main flex items-center justify-between px-6">
      <div>
        <h1 className="text-lg font-semibold text-main">Editor Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-sub">Editor</span>

        <button
          onClick={handleLogout}
          className="btn-secondary text-white px-3 py-1 rounded-md text-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default EditorHeader;
