const express = require("express")
const path = require("path")
const dotenv = require("dotenv").config()
const cors = require("cors")
const logger = require("morgan")

const app = express()
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(express.static(path.join(__dirname, "public")))

app.use("/openai", require("./routes/openAiRoutes"))
