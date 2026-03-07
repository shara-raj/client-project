const EditorSettingsForm = () => {
  return (
    <form className="space-y-4 max-w-xl">
      <div>
        <label className="text-sm text-sub">Name</label>
        <input type="text" className="w-full border-main rounded-md p-2" />
      </div>

      <div>
        <label className="text-sm text-sub">Display Name</label>
        <input type="text" className="w-full border-main rounded-md p-2" />
      </div>

      <div>
        <label className="text-sm text-sub">Bio</label>
        <textarea className="w-full border-main rounded-md p-2" />
      </div>

      <button
        type="submit"
        className="btn-prime text-white px-4 py-2 rounded-md"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditorSettingsForm;
