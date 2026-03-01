import { Link } from "react-router-dom";
import type { BlogPost } from "../types/blog.types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-[#c1a88d]/70 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img
          src="/images/hero/meditation-center.png" //{post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute top-4 left-4 bg-white/60 text-xs px-3 py-1 rounded-full">
          {post.category.name}
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
            to={`/blog/${post.category.slug}/${post.slug}`}
            className="text-sm font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}
