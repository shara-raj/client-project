import { useEffect, useState } from "react";
import {
  getMedia,
  uploadMedia,
  deleteMedia,
} from "@/services/supabase/media.service";

export const useMediaLibrary = () => {
  const [media, setMedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
  ) => {
    await uploadMedia(file, title, category, userId);

    await fetchMedia();
  };

  const remove = async (id: string, url: string) => {
    await deleteMedia(id, url);

    await fetchMedia();
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  return {
    media,
    loading,
    upload,
    remove,
  };
};
