import { useState } from "react"
import "./components/styles/spinner.css"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {
  const [imgUrl, setImg] = useState()
  const [showImg, setShow] = useState("hidden")

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
      setShow("active")
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
    <div className={`App`}>
      <Navbar />
      <Form generateImgRequest={generateImgRequest} />
      <Card url={imgUrl} showImg={showImg} />
      <div className='spinner'></div>
    </div>
  )
}

export default App
