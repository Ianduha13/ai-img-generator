const express = require("express")
const path = require("path")
const dotenv = require("dotenv").config()
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: "https://ai-img-generator-front.vercel.app/",
    methods: ["POST"],
  })
)

app.use(
  express.static(
    path.join(__dirname, "../public/ai-img-generator/build/index.html")
  )
)

app.use("/api/openai", require("./routes/openAiRoutes"))
