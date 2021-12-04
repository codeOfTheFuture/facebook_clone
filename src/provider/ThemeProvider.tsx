import React, { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    setDarkMode((prevState) => !prevState);
  };

  const value = {
    darkMode,
    darkModeToggle,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
