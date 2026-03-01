export type BlogPostQuery =
  | { mode: "recent"; limit?: number }
  | { mode: "featured" }
  | { mode: "all"; page?: number; pageSize?: number };
