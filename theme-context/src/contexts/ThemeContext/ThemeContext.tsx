import { createContext } from "react";

export interface ThemeContextType {
  theme: "dark" | "light";
  changeTheme: (theme: "dark" | "light") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;