import FeaturedPostsSection from "./components/FeaturedPostsSection";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { BlogCard } from "../components/BlogCard";
import { useSearchParams } from "react-router-dom";

export default function BlogPage() {
  const [searchParam, setSearchParam] = useSearchParams();
  const pageParam = Number(searchParam.get("page"));
  const page = !isNaN(pageParam) && pageParam > 0 ? pageParam : 1;

  const { posts, totalPages, loading } = useBlogPosts({
    mode: "all",
    page,
    pageSize: 6,
  });

  return (
    <main className="bg-[url(/images/app-bg/pattern.png)] pt-30">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-4xl font-semibold text-foreground">
          Wellness Insights
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Thoughtful guides, rituals, and practices to support women’s wellness.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
        {/* LEFT COLUMN — Recent Posts + Pagination */}
        <section>
          <h2 className="text-2xl font-semibold mb-10">Recent Posts</h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {/* Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {posts.map((data) => (
                  <BlogCard key={data.id} post={data} />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center items-center gap-6">
                  <button
                    disabled={page === 1}
                    onClick={() => {
                      const nextPage = page - 1;

                      const params = new URLSearchParams(searchParam);

                      params.set("page", String(nextPage));
                      setSearchParam(params);
                    }}
                    className="px-5 py-2 rounded-full border disabled:opacity-40 transition"
                  >
                    Previous
                  </button>

                  <span className="text-sm text-muted-foreground">
                    Page {page} of {totalPages}
                  </span>

                  <button
                    disabled={page === totalPages}
                    onClick={() => {
                      const nextPage = page + 1;
                      const params = new URLSearchParams(searchParam);

                      params.set("page", String(nextPage));
                      setSearchParam(params);
                    }}
                    className="px-5 py-2 rounded-full border disabled:opacity-40 transition"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        <FeaturedPostsSection />
      </div>
    </main>
  );
}
