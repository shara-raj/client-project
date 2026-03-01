import { useBlogPosts } from "../../hooks/useBlogPosts";
import { FeaturedPostRow } from "../../components/FeaturedPostRow";

export default function FeaturedPostsSection() {
  const { posts, loading } = useBlogPosts({ mode: "featured" });

  if (loading) return null;

  if (!posts.length) return null;

  return (
    <aside>
      <h3 className="text-lg font-semibold mb-6">Featured Guides</h3>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id}>
            <FeaturedPostRow post={post} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
