import { supabase } from "./supabaseClient";
import type {
  Mudra,
  MudraFromDB,
} from "@/modules/healing-paths/types/healing.types";

export const getHealingSessions = async (pathId: string) => {
  const { data, error } = await supabase
    .from("healing_sessions")
    .select("*")
    .eq("path_id", pathId)
    .order("order_index", { ascending: true });

  if (error) throw error;

  return data ?? [];
};

export const getMudras = async (pathId: string): Promise<Mudra[]> => {
  const { data, error } = await supabase
    .from("mudras")
    .select(`
      *,
      condition_mudras (
        conditions (
          name
        )
      )
    `)
    .eq("path_id", pathId)
    .order("order_index", { ascending: true });

  if (error) throw error;

  const mappedData: Mudra[] = (data as MudraFromDB[])?.map((mudra) => {
    const publicUrl = supabase.storage
      .from("mudras")
      .getPublicUrl(mudra.image).data.publicUrl;

    return {
      id: mudra.id,
      title: mudra.title,
      image: publicUrl,
      instructions: mudra.instructions,
      benefits: mudra.benefits,
      conditions: mudra.condition_mudras
        ?.map((cm) => cm.conditions?.name)
        .filter((name): name is string => Boolean(name)) ?? [],
    };
  }) ?? [];

  return mappedData;
};

export const getMudrasByCondition = async (conditionName: string) => {
  try {
    // STEP 1: Get condition ID (safe lookup)
    const { data: conditionData, error: condError } = await supabase
      .from("conditions")
      .select("id")
      .ilike("name", `%${conditionName}%`)
      .limit(1);

    if (condError) throw condError;

    const conditionId = conditionData?.[0]?.id;

    if (!conditionId) {
      console.warn("Condition not found:", conditionName);
      return [];
    }

    // STEP 2: Get related mudras
    const { data, error } = await supabase
      .from("condition_mudras")
      .select(`
        mudras (
          id,
          title,
          image,
          instructions,
          benefits
        )
      `)
      .eq("condition_id", conditionId);

    if (error) throw error;

    // STEP 3: Attach public image URLs
    const mapped = data?.map((item: any) => {
      const mudra = item.mudras;

      const publicUrl = supabase.storage
        .from("mudras")
        .getPublicUrl(mudra.image).data.publicUrl;

      return {
        ...mudra,
        image: publicUrl,
      };
    }) ?? [];

    return mapped;
  } catch (err) {
    console.error("Error fetching mudras by condition:", err);
    return [];
  }
};
