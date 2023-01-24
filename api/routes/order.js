const express = require("express")
const router = express.Router()

router.get("/", (req, res, next)=>{
    res.status(200).json({
        message : "orders were fetched",
    })
})

router.post("/", (req, res, next)=>{
    res.status(201).json({
        message : "orders were sent",
    })
})


router.get("/:orderID", (req, res, next)=>{
    const id = req.params.orderID
    if (id == "special") {
        res.status(200).json({
            message : "order will be delivered",
        })
    } else {
        res.status(200).json({
            message : "order is stolen. We got robbed!",
        })
    }
})

module.exports = router

