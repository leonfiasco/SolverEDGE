// ThemeContext.tsx
"use client";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ThemeContextValue {
  navDrawOpen: boolean;
  setNavDrawOpen: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [navDrawOpen, setNavDrawOpen] = useState(false);

  return (
    <ThemeContext.Provider value={{ navDrawOpen, setNavDrawOpen }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
