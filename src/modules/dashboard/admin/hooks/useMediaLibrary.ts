import { useEffect, useState } from "react";
import {
  deleteMedia,
  getMedia,
  uploadMedia,
} from "@/services/supabase/media.service";

export const useMediaLibrary = () => {
  const [media, setMedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadFileName, setUploadFileName] = useState<string | null>(null);

  const fetchMedia = async () => {
    try {
      setLoading(true);

      const data = await getMedia();

      setMedia(data);
    } catch (error) {
      console.error("Media load error", error);
    } finally {
      setLoading(false);
    }
  };

  const upload = async (
    file: File,
    title: string,
    category: string,
    userId: string,
  ): Promise<string> => {
    setUploading(true);
    setUploadFileName(file.name);

    try {
      // DUPLICATE CHECK
      const isDuplicate = media.some(
        (item) =>
          item.name === file.name &&
          item.size === file.size,
      );

      if (isDuplicate) {
        throw new Error("File already exists");
      }
      const url = await uploadMedia(file, title, category, userId);
      await fetchMedia();

      return url;
    } catch (error: any) {
      throw error;
    } finally {
      setUploading(false);
      setUploadFileName(null);
    }
  };

  const remove = async (id: string, url: string) => {
    try {
      await deleteMedia(id, url);

      await fetchMedia();
    } catch (error: any) {
      throw error;
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  return {
    media,
    loading,
    upload,
    remove,
    uploading,
    uploadFileName,
  };
};
