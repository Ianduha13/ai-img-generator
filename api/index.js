const express = require("express")
const path = require("path")
const dotenv = require("dotenv").config()
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/openai", require("./routes/openAiRoutes"))
