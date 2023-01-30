const express = require("express")
const mongoose = require("mongoose")
const Product = require("../models/product")

const router = express.Router()

router.get("/:productID", (req, res, next)=>{

    // const id = req.params.productID
    // try {
    //     (async () => {
    //         const doc = await Product.findById(productID).exec()
    //         console.log (doc)
    //         res.status(200).json(doc)
    //     })()
    // } catch (error) {
    //     console.log(error)
    //     res.status(500).json({
    //         error : error
    //     })
    // }

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

router.get("/", (req, res, next) => {

    res.send("products page")
})

router.post("/", async (req, res, next) => {

    try {            
        const product = await Product.create({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        })
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({error : error})
    }
});

module.exports = router

