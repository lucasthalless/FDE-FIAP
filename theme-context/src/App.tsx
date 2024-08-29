import './App.css'
import ThemeButton from './components/ThemeButton/ThemeButton'
import ThemeContainer from './components/ThemeContainer/ThemeContainer'
import ThemeProvider from './contexts/ThemeContext/ThemeProvider'

function App() {

  return (
      <ThemeProvider>
        <ThemeContainer>
          <p>Hello world!</p>
          <ThemeButton />
        </ThemeContainer>
      </ThemeProvider>
  )
}

export default App
