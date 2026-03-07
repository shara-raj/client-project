import { useEffect, useState } from "react";
import {
  getPostsForReview,
  approvePost,
  rejectPost,
} from "@/services/supabase/post.service";

export const useReviewQueue = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchQueue = async () => {
    try {
      setLoading(true);

      const data = await getPostsForReview();

      setPosts(data);
    } catch (error) {
      console.error("Review queue error", error);
    } finally {
      setLoading(false);
    }
  };

  const approve = async (postId: string) => {
    await approvePost(postId);
    await fetchQueue();
  };

  const reject = async (postId: string, feedback: string) => {
    await rejectPost(postId, feedback);
    await fetchQueue();
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  return {
    posts,
    loading,
    approve,
    reject,
  };
};
