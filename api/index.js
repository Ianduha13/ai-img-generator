const express = require("express")
const path = require("path")
const cors = require("cors")
const logger = require("morgan")

const app = express()
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(
  express.static(path.join(__dirname, "../public/ai-img-generator/build"))
)

app.get("/openai", (req, res) => res.end("Open AI API"))
app.use("/openai", require("./routes/openAiRoutes"))

module.exports = app
