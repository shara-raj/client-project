interface Props {
  onSave: () => void;
  saving: boolean;
}

const PostEditorHeader = ({ onSave, saving }: Props) => {
  return (
    <div className="bg-card border-b border-main flex justify-between items-center px-6 py-3">
      <h2 className="font-semibold text-main">Post Editor</h2>

      <button
        onClick={onSave}
        className="btn-prime px-4 py-2 rounded-md text-white"
      >
        {saving ? "Saving..." : "Save Draft"}
      </button>
    </div>
  );
};

export default PostEditorHeader;
