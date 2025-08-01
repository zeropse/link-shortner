import React, { createContext, useContext, useEffect } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProviderContext = React.createContext<string>("dark");

export function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
  }, []);

  return (
    <ThemeProviderContext.Provider value="dark">
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  return context;
};
