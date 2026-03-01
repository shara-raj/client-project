export type ContentType = "blog" | "pillar";

export type PostStatus = "draft" | "published" | "archived";

export interface Author {
  id: string;
  name: string;
  avatarUrl?: string;
  bio?: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  createdAt?: string;
}

export type RichTextBlock =
  | {
      type: "heading";
      level: 1 | 2 | 3 | 4 | 5 | 6;
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "image";
      url: string;
      caption?: string;
    }
  | {
      type: "list";
      style: "bullet" | "ordered";
      items: string[];
    }
  | {
      type: "quote";
      text: string;
      author?: string;
    };

export interface BlogPost {
  id: string;
  title: string;
  slug: string;

  excerpt: string;
  //coverImage: //string;

  content: RichTextBlock[];

  contentType: ContentType;

  status: PostStatus;

  author?: Author;
  category: Category;

  readingTime: number;

  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;

  flags?: BlogPostFlags;

  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    canonicalUrl?: string;
  };
}
export interface BlogPostFlags {
  featured?: boolean;
  homepage?: boolean;
}
