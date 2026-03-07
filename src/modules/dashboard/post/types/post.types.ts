export type PostStatus =
  | "draft"
  | "review_requested"
  | "approved"
  | "published"
  | "rejected";

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: any;

  status: PostStatus;

  author_id: string;

  created_at: string;
  updated_at?: string;

  feedback?: string;
}

export interface CreatePostPayload {
  title: string;
  slug: string;
  content: any;
}
