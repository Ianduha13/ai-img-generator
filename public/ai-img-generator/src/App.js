import { useState } from "react"
import "./components/styles/spinner.css"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {
  const [imgUrl, setImg] = useState()
  const [theme, setTheme] = useState("dark")
  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  const generateImgRequest = async (prompt, size) => {
    try {
      showSpinner()
      const response = await fetch("/openai/generateimage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          size,
        }),
      })
      if (!response.ok) {
        deleteSpinner()
        throw new Error("That image could not be generated")
      }
      const data = await response.json()
      console.log(data)
      setImg(data.data)
      deleteSpinner()
    } catch (error) {
      console.log(error)
    }
  }
  const showSpinner = () => {
    document.querySelector(".spinner").classList.add("show")
  }
  const deleteSpinner = () => {
    document.querySelector(".spinner").classList.remove("show")
  }
  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} handleThemeChange={handleThemeChange} />
      <Form generateImgRequest={generateImgRequest} />
      <Card url={imgUrl} />
      <div className='spinner'></div>
    </div>
  )
}

export default App
