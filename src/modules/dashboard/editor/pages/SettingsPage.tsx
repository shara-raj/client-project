import EditorSettingsForm from "../components/EditorSettingsForm";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-main">Editor Settings</h1>

      <div className="card p-6">
        <EditorSettingsForm />
      </div>
    </div>
  );
};

export default SettingsPage;
