const path = require("path")
const express = require("express")
const compression = require("compression")

const CONTEXT = `/${process.env.CONTEXT || "angular-ngrx-material-starter"}`
const PORT = process.env.PORT || 8000

const app = express()

app.use(compression())

app.use("/", express.static(path.resolve(__dirname, "./public")))
app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}${CONTEXT}`))
