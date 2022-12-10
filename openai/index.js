const path = require("path")
const express = require("express")

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "public")))

app.get("/openai", (req, res) => res.end("Open AI API"))
app.use("/openai", require("./routes/openAiRoutes"))

module.exports = app
