import { useParams } from "react-router-dom";
import { useAuth } from "@/modules/auth";
import { useUserActivity } from "@/modules/dashboard/user/hooks/useUserActivity";
import { useBlogPost } from "../hooks/useBlogPost";

export default function BlogPostPage() {
  const { categorySlug, slug } = useParams();

  const { post, loading, error } = useBlogPost(slug, categorySlug);

  const auth = useAuth();
  const user = auth?.user;

  const userId = user?.id;
  const postId = post?.id;

  useUserActivity(userId, "blog_post", postId);

  if (loading) return <p>Loading...</p>;

  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 mt-30">
        <h1 className="text-3xl font-semibold">Post not found</h1>
      </div>
    );
  }

  const safeContent = Array.isArray(post.content) ? post.content : [];

  //debog code
  console.log("TYPE:", typeof post.content);
  console.log("CONTENT:", post.content);

  return (
    <main className="bg-background mt-30">
      <article className="max-w-4xl mx-auto px-6 py-24 space-y-12">
        {/* Title */}
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight">{post.title}</h1>
          <p className="text-muted-foreground">{post.readingTime} min read</p>
        </header>

        {/* Featured Image */}
        {post.featured_image && (
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full rounded-2xl"
          />
        )}

        {/* Content */}
        <div className="space-y-8">
          {typeof post.content === "string" ? (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            safeContent.map((block, index) => {
              if (!block || !block.type) return null;

              switch (block.type) {
                case "paragraph": {
                  const text =
                    block.text ??
                    (Array.isArray(block.children)
                      ? block.children.map((c) => c.text).join("")
                      : "");

                  return (
                    <p key={index} className="mb-3 text-main leading-relaxed">
                      {text}
                    </p>
                  );
                }

                case "heading": {
                  const text =
                    block.text ??
                    (Array.isArray(block.children)
                      ? block.children.map((c) => c.text).join("")
                      : "");

                  return (
                    <h2 key={index} className="text-3xl font-bold mb-4">
                      {text}
                    </h2>
                  );
                }

                default:
                  return null;
              }
            })
          )}
        </div>
      </article>
    </main>
  );
}
