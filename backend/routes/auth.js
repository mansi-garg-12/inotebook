const express=require('express');
const router=express.Router();
const User=require('../modules/User');
router.get('/',(req,res)=>{
    console.log("hii");
    res.send("hii");
     console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);
})
module.exports=router