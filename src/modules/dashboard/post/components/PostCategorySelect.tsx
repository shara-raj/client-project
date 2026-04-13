import { useState } from "react";
import { useCategories } from "@/modules/blog/hooks/useCategories";
import toast from "react-hot-toast";

interface Props {
  value?: string;
  onChange: (categoryId: string) => void;
}

const PostCategorySelect = ({ value, onChange }: Props) => {
  const { categories, loading, addCategory } = useCategories();

  const [newCategory, setNewCategory] = useState("");
  const [creating, setCreating] = useState(false);

  const handleCreate = async () => {
    if (!newCategory.trim()) return;

    setCreating(true);

    try {
      const created = await addCategory(newCategory);

      toast.success("Category Created");

      setNewCategory("");

      //auto-select new category
      if (created?.id) {
        onChange(created.id);
      }

      setNewCategory("");
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes("already")) {
          toast.error("Category already exists");
        } else if (err.message.includes("permission")) {
          toast.error("You don't have permission to create categories");
        } else {
          toast.error("Failed to create category");
        }
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="card p-4 space-y-3">
      <h3 className="font-medium text-main">Category</h3>

      {/* Create Category */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New category..."
          className="border-main border px-2 py-2 rounded w-full"
        />
        <button
          onClick={handleCreate}
          disabled={creating || !newCategory.trim()}
          className="px-3 py-1 btn-secondary text-black rounded disabled:opacity-50 cursor-pointer"
        >
          {creating ? "..." : "Add"}
        </button>
      </div>

      {/* Select Category */}
      {loading ? (
        <div className="h-8 bg-soft animate-pulse rounded"></div>
      ) : (
        <select
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className="border-main border px-2 py-2 rounded w-full"
        >
          <option value="">Select category</option>

          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default PostCategorySelect;
