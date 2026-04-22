export default function MaintenancePage() {
  return (
    <div className="dashboard-theme min-h-screen flex items-center justify-center bg-page px-6">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-main">Wellmoon Veda</h1>

        {/* Icon */}
        <div className="text-5xl">🚧</div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-main">
          We’re Under Maintenance
        </h2>

        {/* Message */}
        <p className="text-sm text-sub">
          We’re making improvements to give you a better experience. Please
          check back shortly.
        </p>

        {/* Optional CTA */}
        <button
          onClick={() => window.location.reload()}
          className="btn-secondary px-5 py-2 rounded-lg text-base"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}
