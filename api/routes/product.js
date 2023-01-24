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


module.exports = router

