const express= require("express");
const router=express.Router();
router.post("/",(req,res)=>{
    res.send("LOGIN SUCCESSFULL");
});
router.post("/register",(req,res)=>{
    res.send("REGISTER SUCCESSFULL");
});
module.exports=router;