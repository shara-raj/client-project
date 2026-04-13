import { useState, useRef } from "react";
import Button from "@/components/ui/Button";

type Props = {
  onUpload: (file: File) => Promise<void>;
  uploading?: boolean;
  fileName?: string | null;
};

const MediaUploadDropzone = ({ onUpload, uploading, fileName }: Props) => {
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!file) return;
    await onUpload(file);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    await handleFile(file);
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) await handleFile(file);

    // reset input so same file can be selected again
    e.target.value = "";
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`bg-card-white border-2 border-dashed rounded-lg p-10 text-center space-y-4
      ${dragging ? "bg-soft border-primary" : "border-main"}`}
    >
      {uploading ? (
        <div className="space-y-2">
          <div className="text-sm text-sub">Uploading: {fileName}</div>

          <div className="w-full bg-gray-200 rounded h-2">
            <div className="bg-primary h-2 rounded animate-pulse w-full"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="">
            <h4>Drag & Drop image here</h4>
          </div>
          <div className="text-muted text-sm">or</div>

          <Button
            variant="secondary"
            className="btn-prime px-2! py-2! text-base! rounded cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            Choose Image
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileSelect}
          />
        </>
      )}
    </div>
  );
};

export default MediaUploadDropzone;
