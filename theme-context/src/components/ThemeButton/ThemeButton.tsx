import useTheme from "../../contexts/ThemeContext/useTheme"

export default function ThemeButton () {
  const { theme, changeTheme } = useTheme()

  const handleChangeTheme = (newTheme: typeof theme) => {
    changeTheme(newTheme)
  }

  return (
    <button
      onClick={() => handleChangeTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '☀' : '☽'}
    </button>
  )
}