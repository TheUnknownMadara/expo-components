import { useEffect } from "react";
import { useThemeStore } from "./useThemesStore";

export const ThemeInitializer = () => {
  const initializeTheme = useThemeStore(state => state.initializeTheme);
  
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return null;
};
