import { Link } from "react-router-dom";
import type { BlogPost } from "../types/blog.types";

interface FeaturedPostRowProps {
  post: BlogPost;
}

export function FeaturedPostRow({ post }: FeaturedPostRowProps) {
  return (
    <Link
      to={`/blog/${post.category.slug}/${post.slug}`}
      className="flex gap-4 items-start group"
    >
      <img
        src="/images/hero/meditation-center.png"
        alt={post.title}
        className="w-20 h-20 rounded-xl object-cover shrink-0"
      />

      <div>
        <h4 className="text-sm font-medium leading-snug group-hover:underline">
          {post.title}
        </h4>
      </div>
    </Link>
  );
}
