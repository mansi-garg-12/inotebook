const express=require('express');  // connect express
const router=express.Router();     //connect express router
const User=require('../modules/User'); 
const fetchuser=require('../middlewear/fetchuser');  //import module
const { body, validationResult } = require('express-validator');  // for schema validation
const { findOne } = require('../modules/User'); // to find the unique or not
const bcrypt = require('bcryptjs'); // to hash the password
var jwt = require('jsonwebtoken'); // to create a response using web socket
const JWT_SECRET='mansithepasswo$rd';
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
      });

      const data={
          user:{
            id:user.id
          }
      }
      const authtoken=jwt.sign(data,JWT_SECRET); //authentication
      res.json({authtoken});  
      // console.log(jwtData);
      // res.json(user);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Interval server error occured");
    }
   
})
router.post('/login',[ 
  body('email','Enter the valid email').isEmail(),  // password validation
  body('password','please cannot to blank').exists()], //name validation
  async (req,res)=>{  
    const errors = validationResult(req); // checking for errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const{email,password}=req.body;
      try{
        let user=await User.findOne({email});
        if(!user)
        {
          return res.status(400).json({ errors: "Please enter the correct credentials" });
        }
        const passwordauthentication=await bcrypt.compare(password,user.password);
        if(!passwordauthentication){
          return res.status(400).json({ errors: "Please enter the correct credentials" });
        }
        
        const data={
          user:{
            id:user.id
          }
      }
      const authentication=jwt.sign(data,JWT_SECRET);
      res.json({authentication});
      }
      catch(error){
        console.error(error.message);
        res.status(500).send("Interval server error occured");
    }

  })


// for logined user
router.post('/getuser',fetchuser, //name validation
  async (req,res)=>{  
    try {
      userId=req.user.id;
      const user=await User.findById(userId).select("-password");
      res.send(user);
    } catch(error){
      console.error(error.message);
      res.status(500).send("Interval server error occured");
  }
  })
module.exports=router