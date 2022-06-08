const express=require('express');
const router=express.Router();
const User=require('../modules/User');
const { body, validationResult } = require('express-validator');
router.post('/',[ 
    body('email','Enter a valid name').isEmail(),
    body('password','Enter the valid email').isLength({ min: 5 }),
    body('name','please enter min 3 length password').isLength({ min: 3 })],(req,res)=>{
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      User.create({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
      .catch(err=>{console.log(err)
        res.json({error:'Please enter the unique value',message : err.message})})
})
module.exports=router