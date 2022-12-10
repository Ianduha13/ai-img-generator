import { useState } from "react"
import "./components/styles/spinner.css"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

const apiUrl = process.env.REACT_APP_API_URL

const App = () => {
  const [imgUrl, setImg] = useState([])
  const [showImg, setShow] = useState("hidden")

  const cleanImg = () => {
    setImg([])
    setShow("hidden")
  }

  const generateImgRequest = async (prompt, size) => {
    try {
      showSpinner()
      const response = await fetch(`${apiUrl}/api/openai/generateimage`, {
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
      setImg((imgUrl) => [...imgUrl, data.data])
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
      <Form generateImgRequest={generateImgRequest} cleanImg={cleanImg} />
      <div className='card-container'>
        <Card url={imgUrl[0]} showImg={showImg} />
        <Card url={imgUrl[1]} showImg={showImg} />
        <Card url={imgUrl[2]} showImg={showImg} />
      </div>
      <div className='spinner'></div>
    </div>
  )
}

export default App
