const path = require("path")
const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "frontend")))

app.use("/openai", require("./routes/openAiRoutes"))

module.exports = app
