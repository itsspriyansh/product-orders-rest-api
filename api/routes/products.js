const express = require("express")
const mongoose = require("mongoose")
const { findByIdAndUpdate } = require("../models/product")
const Product = require("../models/product")

const router = express.Router()

router.get("/:productId", async (req, res, next)=>{

    try {
        const id = req.params.productId
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/", async (req, res, next) => {
    
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
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

router.delete("/:productId", async (req, res, next) => {

    try {
        const id = req.params.productId
        const product = await Product.deleteMany({_id : id})
        res.json({
            message : "successfully deleted",
            deleted_product : product
        })
    } catch (error) {
        res.json(error)
    }
})

// router.put("/productId", async (req, res, next) => {

//     try {
//         const id = req.params.productId
//         const newProduct = {
//             name : req.body.name,
//             price : req.body.price,
//         }

//         const product = await Product.findById(id)
//         const updatedProduct = await Product.updateOne(newProduct)
//         res.json({
//             message : "successfully updated",
//             updated_product : product,
//         })
//     } catch (error) {
//         res.json(error)
//     }
// })

module.exports = router

