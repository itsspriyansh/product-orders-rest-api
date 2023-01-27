const express = require("express")

const router = express.Router()

router.get("/:productID", (req, res, next)=>{
    const id = req.params.productID
    if (id == "special") {
        res.json({
            message : "yay this is special",
        })
    } else {
        res.json({
            message : "get lost",
        })
    }
})

router.post("/", (req, res, next)=>{
    const product = {
        name : req.body.productName,
        price : req.body.productPrice,
    }
    res.status(201).json({
        message : "product successfully created",
        product : product,
    })
})

module.exports = router

