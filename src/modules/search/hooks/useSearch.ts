import { useEffect, useState } from "react";
import type { HealingPath } from "@/services/supabase/healingPathService";
import { searchHealingPaths } from "@/services/supabase/healingPathService";
import { searchBlogPosts } from "@/services/supabase/post.service";
import type { SearchPostResult } from "@/services/supabase/post.service";

interface UseSearchResult {
  healingPaths: HealingPath[];
  blogPosts: SearchPostResult[];
  loading: boolean;
}

export const useSearch = (query: string): UseSearchResult => {
  const [healingPaths, setHealingPaths] = useState<HealingPath[]>([]);
  const [blogPosts, setBlogPosts] = useState<SearchPostResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!query || query.trim() === "") {
      setHealingPaths([]);
      setBlogPosts([]);
      return;
    }

    const handler = setTimeout(async () => {
      setLoading(true);

      try {
        const [paths, posts] = await Promise.all([
          searchHealingPaths(query),
          searchBlogPosts(query),
        ]);

        setHealingPaths(paths);
        setBlogPosts(posts);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(handler);
  }, [query]);

  return { healingPaths, blogPosts, loading };
};
