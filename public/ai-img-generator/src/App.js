import { useState } from "react"
import Form from "./components/Form"
import Navbar from "./components/Navbar"

function App() {
  const [theme, setTheme] = useState("dark")
  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }
  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} handleThemeChange={handleThemeChange} />
      <Form />
    </div>
  )
}

export default App
