const express= require("express");
const nodemon= require("nodemon");
const app=express();
const Authroute=require("./routes/auth");
app.use("/",Authroute);
app.listen(8000,()=>{
    console.log("server listening at 8000");
//app.use(express.json());

//app.post("/",(req,res)=>{
    //console.log(req.body)
//})

//app.get("/",(req,res)=>{res.send("OK Anuraj");})
//app.listen(8000,()=>{console.log("server listenig at 8000")});
})