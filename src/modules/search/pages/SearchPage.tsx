import { useSearchParams } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";
import { useSearch } from "../hooks/useSearch";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const { healingPaths, blogPosts, loading } = useSearch(query);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <SearchInput />

      <SearchResults
        healingPaths={healingPaths}
        blogPosts={blogPosts}
        loading={loading}
      />
    </div>
  );
};

export default SearchPage;
