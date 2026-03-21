import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { $insertNodes } from "lexical";
import { $createImageNode } from "../nodes/ImageNode";
import { useAuth } from "@/modules/auth";
import { useMediaLibrary } from "@/modules/dashboard/admin/hooks/useMediaLibrary";
import toast from "react-hot-toast";

const DragDropImagePlugin = () => {
  const [editor] = useLexicalComposerContext();
  const { upload } = useMediaLibrary();

  const auth = useAuth();
  const user = auth?.user;

  useEffect(() => {
    const root = editor.getRootElement();

    if (!root) return;

    const handleDrop = async (event: DragEvent) => {
      const files = event.dataTransfer?.files;

      if (!files || files.length === 0) return;

      const file = files[0];

      if (!file.type.startsWith("image/")) return;

      event.preventDefault();

      // 🔒 Role restriction
      if (user?.role !== "admin") {
        alert("Image uploads are restricted. Please use Media Library.");
        return;
      }

      const toastId = toast.loading("Uploading Media...");
      try {
        const url = await upload(file, file.name, "editor", user.id);

        editor.update(() => {
          const imageNode = $createImageNode({
            src: url,
            alt: file.name,
            width: 600,
            caption: "",
            alignment: "center",
          });

          $insertNodes([imageNode]);
        });
        toast.success("Image added", { id: toastId });
      } catch (err) {
        toast.error("Upload failed", { id: toastId });
      }
    };

    root.addEventListener("drop", handleDrop);
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    root.addEventListener("dragover", handleDragOver);

    return () => {
      root.removeEventListener("drop", handleDrop);
      root.removeEventListener("dragover", handleDragOver);
    };
  }, [editor]);

  return null;
};

export default DragDropImagePlugin;
