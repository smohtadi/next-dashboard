"use client";
import { createContext, FC, useContext, useEffect, useState } from "react";
type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  setMode: (mode: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("system");
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const initial = saved || "system";
    setTheme(initial);
    setIsInitialized(true);
  }, []);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        if (e.matches) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("theme", theme);
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      if (theme === "dark" || (theme === "system" && mediaQuery.matches))
        document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  }, [theme, isInitialized]);
  const setMode = (mode: Theme) => {
    setTheme(mode);
  }
  return (
    <ThemeContext.Provider value={{ theme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
