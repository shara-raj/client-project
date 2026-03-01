import type { BlogPost } from "../types/blog.types";
import { mockPosts } from "../data/mockPosts";
import type { BlogPostQuery } from "../types/blog.query";

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export const blogService = {
  async getPosts(query: BlogPostQuery): Promise<PaginatedResult<BlogPost>> {
    let posts = mockPosts.filter((post) => post.status === "published");

    posts = posts.sort(
      (a, b) =>
        new Date(b.publishedAt ?? 0).getTime() -
        new Date(a.publishedAt ?? 0).getTime(),
    );

    if (query.mode === "recent") {
      return {
        data: posts.slice(0, query.limit ?? 3),
        total: posts.length,
        page: 1,
        pageSize: query.limit ?? 3,
        totalPages: 1,
      };
    }
    if (query.mode === "featured") {
      const featured = posts.filter((post) => post.flags?.featured);

      return {
        data: featured,
        total: featured.length,
        page: 1,
        pageSize: featured.length,
        totalPages: 1,
      };
    }

    if (query.mode === "all") {
      const page = query.page ?? 1;
      const pageSize = query.pageSize ?? 6;

      const total = posts.length;
      const totalPages = Math.ceil(total / pageSize);

      const start = (page - 1) * pageSize;
      const end = start + pageSize;

      return {
        data: posts.slice(start, end),
        total,
        page,
        pageSize,
        totalPages,
      };
    }
    return {
      data: posts,
      total: posts.length,
      page: 1,
      pageSize: posts.length,
      totalPages: 1,
    };
  },

  async getPostBySlug(
    categorySlug: string,
    slug: string,
  ): Promise<BlogPost | null> {
    return (
      mockPosts.find(
        (post) =>
          post.category.slug === categorySlug &&
          post.slug === slug &&
          post.status === "published",
      ) ?? null
    );
  },
};
