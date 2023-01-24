const express = require("express")
const path = require("path")
const productRouter = require("./api/routes/product")
const orderRouter = require("./api/routes/order")

const app = express()

app.use("/product", productRouter)
app.use("/order", orderRouter)

module.exports = app

