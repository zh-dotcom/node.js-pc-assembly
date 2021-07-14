const express = require("express")
// const laptopRouter = require("./routes/laptopRouter")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs")
// app.use("/laptops", laptopRouter)
app.listen(8080)