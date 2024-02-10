const express = require("express");
const {authMiddleware} = require("../middleware")

const router = express.Router();

router.post("/info",authMiddleware,(req,res)=>{
    console.log("in auth middleware",req.userId)
    return res.send("into profile section")
})


module.exports = router