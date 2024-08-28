import { PropsWithChildren, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({children}: PropsWithChildren) => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const changeTheme = (theme: "light" | "dark") => {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider