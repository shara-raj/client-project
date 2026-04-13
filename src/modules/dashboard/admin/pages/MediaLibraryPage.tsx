import MediaGrid from "../components/MediaGrid";
import { useMediaLibrary } from "../hooks/useMediaLibrary";
import MediaUploadDropzone from "../../media/components/MediaUploadDropzone";
import { useAuth } from "@/modules/auth";
import { withToast } from "@/utils/withToast";
import Pagination from "../../media/components/Pagination";

const MediaLibraryPage = () => {
  const {
    media,
    loading,
    upload,
    remove,
    uploading,
    uploadFileName,
    page,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  } = useMediaLibrary();

  const { user } = useAuth() ?? {};

  const handleUpload = async (file: File) => {
    if (!user) return;

    await withToast(() => upload(file, file.name, "general", user.id), {
      loading: "Uploading image...",
      success: "Image uploaded",
      error: "Upload failed",
    });
  };

  const handleDelete = async (id: string, url: string) => {
    await withToast(() => remove(id, url), {
      loading: "Deleting image...",
      success: "Image deleted",
      error: "Delete failed",
    });
  };

  return (
    <div className="dashboard-theme p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Media Library</h1>

      {/* Drag & Drop Upload */}

      <MediaUploadDropzone
        onUpload={handleUpload}
        uploading={uploading}
        fileName={uploadFileName}
      />

      {/* Media Grid */}

      <MediaGrid media={media} loading={loading} onDelete={handleDelete} />

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={goToPage}
        onNext={nextPage}
        onPrev={prevPage}
      />
    </div>
  );
};

export default MediaLibraryPage;
