import type { BlogPost } from "@/modules/blog/types/blog.types";
import { BlogCard } from "@/modules/blog/components/BlogCard";

interface InsightPreviewGridProps {
  posts: BlogPost[];
}

export function InsightPreview({ posts }: InsightPreviewGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
}
