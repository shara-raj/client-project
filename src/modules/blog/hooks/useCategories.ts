import { useEffect, useState } from "react";
import * as blogservice from "../api/blog.service";

export const useCategories = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    setLoading(false);

    try {
      const data = await blogservice.fetchCategories();
      setCategories(data || []);
    } catch (error) {
      console.log("Failed to fetch categories", error);
    } finally {
      setLoading(false);
    }
  };

  const addCategory = async (name: string) => {
    try {
      const newCategory = await blogservice.createCategory(name);

      //Immediate UI update(no refetch needed)
      setCategories((prev) => [newCategory, ...prev]);

      return newCategory;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    addCategory,
    refetch: fetchCategories,
  };
};
