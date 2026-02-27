import { create } from "zustand";
import { persist } from "zustand/middleware";

export const themeOptions = [
  {
    id: "graphite",
    label: "Graphite (Darker)",
    chip: "Dark",
  },
  {
    id: "slate",
    label: "Slate (Lighter)",
    chip: "Light",
  },
  {
    id: "ocean",
    label: "Ocean",
    chip: "Blue",
  },
];

const FALLBACK_THEME = "graphite";

const getValidTheme = (themeId) =>
  themeOptions.some((theme) => theme.id === themeId)
    ? themeId
    : FALLBACK_THEME;

const applyDocumentTheme = (themeId) => {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", getValidTheme(themeId));
};

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: FALLBACK_THEME,
      themes: themeOptions,
      setTheme: (themeId) => {
        const validTheme = getValidTheme(themeId);
        applyDocumentTheme(validTheme);
        set({ theme: validTheme });
      },
      cycleTheme: () => {
        const currentTheme = get().theme;
        const currentIndex = themeOptions.findIndex(
          (theme) => theme.id === currentTheme,
        );
        const nextIndex = (currentIndex + 1) % themeOptions.length;
        const nextTheme = themeOptions[nextIndex].id;
        applyDocumentTheme(nextTheme);
        set({ theme: nextTheme });
      },
    }),
    {
      name: "learnhub-theme",
      partialize: (state) => ({ theme: state.theme }),
      onRehydrateStorage: () => (state) => {
        applyDocumentTheme(state?.theme || FALLBACK_THEME);
      },
    },
  ),
);

