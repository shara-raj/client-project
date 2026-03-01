import type { BlogPost } from "@/modules/blog/types/blog.types";
import { BlogCard } from "@/modules/blog/components/BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h3 className="text-3xl font-semibold text-center mb-8 text-foreground">
        Featured Guides for Women’s Wellness
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
}
