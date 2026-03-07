import { useState } from "react";
import MediaGrid from "../components/MediaGrid";
import { useMediaLibrary } from "../hooks/useMediaLibrary";

const MediaLibraryPage = () => {
  const { media, loading, upload, remove } = useMediaLibrary();

  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    const userId = "admin-id"; // replace later with auth user

    await upload(file, title, category, userId);

    setFile(null);
    setTitle("");
    setCategory("");
  };

  return (
    <div className="dashboard-theme p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Media Library</h1>

      <div className="card p-4 space-y-3">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />

        <input
          className="border-main p-2 w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border-main p-2 w-full"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button onClick={handleUpload} className="btn-prime px-4 py-2 rounded">
          Upload Media
        </button>
      </div>

      <MediaGrid media={media} loading={loading} onDelete={remove} />
    </div>
  );
};

export default MediaLibraryPage;
