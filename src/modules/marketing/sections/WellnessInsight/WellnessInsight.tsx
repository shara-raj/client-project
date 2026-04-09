import { Section } from "@/components/ui/Section";
import { useBlogPosts } from "@/modules/blog/hooks/useBlogPosts";
import { InsightHeader } from "./components/InsightHeader";
import { InsightPreview } from "./components/InsightPreview";
import { BlogGrid } from "@/modules/blog/components/BlogGrid";

export function WellnessInsight() {
  const { posts: recentPosts } = useBlogPosts({
    mode: "recent",
    limit: 3,
  });

  const { posts: featuredPosts } = useBlogPosts({
    mode: "featured",
  });

  return (
    <Section id="blog" className="py-24">
      <InsightHeader />

      <InsightPreview posts={recentPosts} />

      <BlogGrid posts={featuredPosts} />
    </Section>
  );
}
