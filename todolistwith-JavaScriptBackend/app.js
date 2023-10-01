require("dotenv").config()

const express = require("express")
const app = express()
const bodyparser = require("body-parser")

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const api = require("./api")

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Server ",
  });
});

app.use("/api/",api)
module.exports = app ;