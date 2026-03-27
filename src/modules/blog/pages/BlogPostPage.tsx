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
  console.log(post.content);

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
          {safeContent.map((block, index) => {
            if (!block || !block.type) return null;

            switch (block.type) {
              case "heading": {
                const text =
                  block.text ??
                  (Array.isArray(block.children)
                    ? block.children.map((c) => c.text).join("")
                    : "");

                switch (block.level) {
                  case 1:
                    return (
                      <h1
                        key={index}
                        className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6 mt-2"
                      >
                        {text}
                      </h1>
                    );
                  case 2:
                    return (
                      <h2
                        key={index}
                        className="text-3xl font-bold tracking-tight text-slate-800 mb-4 mt-6 pb-1"
                      >
                        {text}
                      </h2>
                    );
                  case 3:
                    return (
                      <h3
                        key={index}
                        className="text-2xl font-semibold text-slate-800 mb-3 mt-5"
                      >
                        {text}
                      </h3>
                    );
                  case 4:
                    return (
                      <h4
                        key={index}
                        className="text-xl font-semibold text-slate-700 mb-2 mt-4"
                      >
                        {text}
                      </h4>
                    );
                  case 5:
                    return (
                      <h5
                        key={index}
                        className="text-lg font-bold text-slate-600 mb-1 mt-3 tracking-wide"
                      >
                        {text}
                      </h5>
                    );
                  case 6:
                    return (
                      <h6
                        key={index}
                        className="text-base font-bold text-slate-500 mb-1 mt-3 tracking-wider"
                      >
                        {text}
                      </h6>
                    );
                  default:
                    return (
                      <h2
                        key={index}
                        className="text-3xl font-bold tracking-tight text-slate-800 mb-4 mt-6 pb-1"
                      >
                        {text}
                      </h2>
                    );
                }
              }

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

              case "image":
                return (
                  <figure key={index} className="space-y-3">
                    <img
                      src={block.url}
                      alt={block.caption ?? ""}
                      className="rounded-2xl"
                    />
                    {block.caption && (
                      <figcaption className="text-sm text-muted-foreground">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );

              case "list": {
                if (!Array.isArray(block.items)) return null;

                const isOrdered = block.style === "ordered";
                const ListTag = isOrdered ? "ol" : "ul";

                return (
                  <ListTag
                    key={index}
                    className={`pl-6 space-y-2 ${
                      isOrdered ? "list-decimal" : "list-disc"
                    }`}
                  >
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ListTag>
                );
              }

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="border-l-4 pl-6 italic text-muted-foreground"
                  >
                    {block.text}
                    {block.author && (
                      <footer className="mt-2 text-sm">— {block.author}</footer>
                    )}
                  </blockquote>
                );

              case "table":
                return (
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border border-main table-auto">
                      <tbody>
                        {block.rows.map((row: string[], rowIndex: number) => (
                          <tr key={rowIndex}>
                            {row.map((cell: string, cellIndex: number) => (
                              <td
                                key={cellIndex}
                                className="
                    border border-main
                    px-3 py-2
                    align-top
                    break-words
                    whitespace-normal
                  "
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </article>
    </main>
  );
}
