import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  getSettings,
  updateSettings,
} from "@/services/supabase/settings.service";

/* ================= TYPES ================= */

export interface Settings {
  id: string;
  maintenance_mode: boolean;
  updated_at?: string;
}

export interface SettingsContextType {
  settings: Settings | null;
  loading: boolean;
  saveSettings: (updates: Partial<Settings>) => Promise<Settings>;
}

/* ================= CONTEXT ================= */

const SettingsContext = createContext<SettingsContextType | null>(null);

/* ================= HOOK ================= */

export const useSettingsContext = (): SettingsContextType => {
  const ctx = useContext(SettingsContext);

  if (!ctx) {
    throw new Error("useSettingsContext must be used inside SettingsProvider");
  }

  return ctx;
};

/* ================= PROVIDER ================= */

interface SettingsProviderProps {
  children: ReactNode;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const data = await getSettings();
      setSettings(data);
    } catch (err) {
      console.error("Settings fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async (
    updates: Partial<Settings>,
  ): Promise<Settings> => {
    const updated = await updateSettings(updates);
    setSettings(updated);
    return updated;
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        loading,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
