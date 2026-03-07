import { useEffect, useState } from "react";
import {
  getSubscriberCount,
  getHealingPathUsage,
  getEditorActivity,
} from "@/services/supabase/analytics.service";

export const useAdminAnalytics = () => {
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
  const [healingPaths, setHealingPaths] = useState<any[]>([]);
  const [editorActivity, setEditorActivity] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);

      const [subs, paths, activity] = await Promise.all([
        getSubscriberCount(),
        getHealingPathUsage(),
        getEditorActivity(),
      ]);

      setSubscriberCount(subs);
      setHealingPaths(paths);
      setEditorActivity(activity);
    } catch (error) {
      console.error("Analytics error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return {
    subscriberCount,
    healingPaths,
    editorActivity,
    loading,
  };
};

// { name: "Aura Healing", views: 420 },
//         { name: "Mudra Healing", views: 310 },
//         { name: "Sound Healing", views: 110 },
//         { name: "Virtual Nature Healing", views: 260 },
//         { name: "Wellness Yoga", views: 530 },
