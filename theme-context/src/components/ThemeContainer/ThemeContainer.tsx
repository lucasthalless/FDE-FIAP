import { HTMLAttributes, PropsWithChildren } from "react"
import useTheme from "../../contexts/ThemeContext/useTheme"

interface ThemeContainerProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren { }

export default function ThemeContainer ({children, ...props}: ThemeContainerProps) {
  const { theme } = useTheme()


  return (
    <div
      className={`
        theme-container
        ${props.className}
        ${theme}
      `}
    >
      {children}
    </div>
  )
}