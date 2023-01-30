const express = require("express")
const mongoose = require("mongoose")
const Product = require("../models/product")

const router = express.Router()

router.get("/:productID", (req, res, next)=>{
    const id = req.params.productID
    Product.findById(productID).exec()
    .then(doc => {
        console.log(doc)
        res.status(200).json(doc)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            error : error,
        })
    })
})

router.post("/", (req, res, next)=>{
    const product = new Product ({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.productName,
        price : req.body.productPrice,
    })
    product.save()
    .then (response => console.log (response))
    .catch (error => console.log (error))
    res.status(201).json({
        message : "product successfully created",
        product : product,
    })
})

module.exports = router

