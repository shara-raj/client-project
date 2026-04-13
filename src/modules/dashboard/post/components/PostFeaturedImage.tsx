import { useState } from "react";
import MediaLibraryModal from "@/modules/dashboard/media/components/MediaLibraryModal";
import toast from "react-hot-toast";

interface Props {
  value?: string | null;
  onChange: (url: string | null) => void;
}

const PostFeaturedImage = ({ value, onChange }: Props) => {
  const [libraryOpen, setLibraryOpen] = useState(false);

  return (
    <div className="card p-4 space-y-3">
      <h3 className="font-medium text-main">Featured Image</h3>

      {value ? (
        <div className="space-y-3">
          <img
            src={value}
            alt="Featured"
            className="w-full h-44 object-cover rounded"
          />

          <div className="flex gap-2">
            <button
              onClick={() => setLibraryOpen(true)}
              className="btn-secondary px-3 py-1 text-sm rounded text-white"
            >
              Change Image
            </button>

            <button
              onClick={() => {
                const toastId = toast.loading("Removing image...");

                try {
                  onChange(null);
                  toast.success("Image removed", { id: toastId });
                } catch (err) {
                  toast.error("Failed to remove image", { id: toastId });
                }
              }}
              className="btn-secondary px-3 py-1 text-sm rounded text-white"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setLibraryOpen(true)}
          className="btn-secondary px-3 py-1 rounded text-white w-full"
        >
          Select Featured Image
        </button>
      )}

      <MediaLibraryModal
        open={libraryOpen}
        onClose={() => setLibraryOpen(false)}
        onSelect={(url) => {
          if (url === value) {
            toast("Same image selected");
            return;
          }

          const toastId = toast.loading("Setting featured image...");

          try {
            onChange(url);
            toast.success("Featured image updated", { id: toastId });
          } catch (err) {
            toast.error("Failed to update image", { id: toastId });
          }

          setLibraryOpen(false);
        }}
      />
    </div>
  );
};

export default PostFeaturedImage;
