import { useState } from "react";
import EditorTable from "../components/EditorTable";
import { useEditors } from "../hooks/useEditors";

const EditorsPage = () => {
  const { editors, loading, addEditor, removeEditor } = useEditors();

  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");

  const handleCreate = async () => {
    await addEditor(name, email, tempPassword);

    setShowModal(false);
    setName("");
    setEmail("");
    setTempPassword("");
  };

  return (
    <div className="dashboard-theme p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Editors</h1>

        <button
          onClick={() => setShowModal(true)}
          className="btn-prime px-4 py-2 rounded"
        >
          Add Editor
        </button>
      </div>

      <EditorTable
        editors={editors}
        loading={loading}
        onDelete={removeEditor}
      />

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="card p-6 w-[400px] space-y-4">
            <h2 className="text-lg font-semibold">Create Editor</h2>

            <input
              className="border-main p-2 w-full"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="border-main p-2 w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="border-main p-2 w-full"
              placeholder="Temporary Password"
              value={tempPassword}
              onChange={(e) => setTempPassword(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="btn-secondary px-3 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleCreate}
                className="btn-prime px-3 py-2 rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorsPage;
