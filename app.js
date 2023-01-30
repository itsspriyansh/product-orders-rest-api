const express = require("express")
const path = require("path")
const productRouter = require("./api/routes/products")
const orderRouter = require("./api/routes/orders")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb+srv://itsspiryansh:" + process.env.MONGO_ATLAS_PASSWORD + "@cluster0.mbi5xxx.mongodb.net/test", {
    useMongoClient : true
})

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(morgan("dev"))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Tye, Accept, Authorization"
    )
    if (req.method == "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "PUT, POST, PATCH, DELETE"        
        )
        return res.status(200).json({})
    }
    next()
})

app.use("/product", productRouter)
app.use("/order", orderRouter)

app.use((req, res, next) => {
    const error = new Error("not found")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json ({
        error : {
            message : error.message
        }
    })
})

module.exports = app

