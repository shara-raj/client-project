import { supabase } from "./supabaseClient";

export interface HealingPath {
  id: string;
  title: string;
  description: string;
  slug: string;
  matchReason?: string;
}

export const searchHealingPaths = async (
  query: string,
): Promise<HealingPath[]> => {
  // 1. Normal search
  const { data: basePaths, error: baseError } = await supabase
    .from("healing_paths")
    .select("id, title, description, slug")
    .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
    .limit(6);

  if (baseError) throw baseError;

  let results: HealingPath[] = basePaths ?? [];

  // 2. Condition search (for Mudra Healing)
  const { data: matchedConditions, error: conditionError } = await supabase
    .from("conditions")
    .select("name")
    .ilike("name", `%${query}%`)
    .limit(1);

  if (conditionError) throw conditionError;

  // 3. If any condition matches → include Mudra Healing
  if (matchedConditions && matchedConditions.length > 0) {
    const { data: mudraPath, error: pathError } = await supabase
      .from("healing_paths")
      .select("id, title, description, slug")
      .eq("slug", "mudra-healing")
      .single();

    if (pathError) throw pathError;

    // avoid duplicates
    const exists = results.some((p) => p.id === mudraPath.id);

    if (!exists && results.length < 6) {
      results = [
        {
          ...mudraPath,
          matchReason: `Matched condition: ${matchedConditions[0].name}`,
        },
        ...results,
      ];
    }
  }

  return results;
};
