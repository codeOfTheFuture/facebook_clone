import { createContext, useContext } from "react";

interface Theme {
  darkMode: boolean;
  darkModeToggle: () => void;
}

export const ThemeContext = createContext<Theme>({
  darkMode: false,
  darkModeToggle: () => {},
});

export const useTheme = () => useContext(ThemeContext);
