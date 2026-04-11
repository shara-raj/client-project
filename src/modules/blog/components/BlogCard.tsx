import { Link } from "react-router-dom";
import type { BlogPost } from "../types/blog.types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const categorySlug = post.category?.slug ?? "uncategorized";

  if (!categorySlug) {
    console.warn("Missing category slug for post:", post);
  }

  return (
    <article className="group bg-card-sand/70 hover:bg-card-sand/80 rounded-2xl overflow-hidden card-hover flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.featured_image || "/images/hero/meditation-center.png"}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute top-4 left-4 bg-white/60 text-xs px-3 py-1 rounded-full">
          {post.category?.name}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {post.title}
        </h3>

        <p className="text-muted-foreground line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm text-muted-foreground">
            {post.readingTime} min read
          </span>

          <Link
            to={`/blog/${categorySlug || "uncategorized"}/${post.slug}`}
            className="text-sm font-medium hover:!underline hover:!text-primary"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}
