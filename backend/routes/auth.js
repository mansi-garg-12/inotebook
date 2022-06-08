const express=require('express');  // connect express
const router=express.Router();     //connect express router
const User=require('../modules/User');   //import module
const { body, validationResult } = require('express-validator');  // for schema validation
const { findOne } = require('../modules/User'); // to find the unique or not
const bcrypt = require('bcryptjs');
router.post('/createuser',[ 
    body('email','Enter a valid name').isEmail(),  // email validation
    body('password','Enter the valid email').isLength({ min: 5 }),  // password validation
    body('name','please enter min 3 length password').isLength({ min: 3 })], //name validation
    async (req,res)=>{  // async req and res
   
    const errors = validationResult(req); // checking for errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      try{ // try and catch if there is any user
      let user=await User.findOne({email : req.body.email});  // it will find existting amail
      if(user){ // if present then print error
      return res.status(400).json({errors: "Email already exist"})
      }
      const salt=await bcrypt.genSalt(10);
      const secPass=await bcrypt.hash(req.body.password,salt);
      //create a new user
      user=await User.create({
        name: req.body.name,
        email:req.body.email,
        password: secPass,
      })
      res.json(user);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("some error occured");
    }
   
})
module.exports=router