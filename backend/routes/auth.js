const express = require('express');
const route = express.Router();
const User =  require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser');
const {check,body,validationResult} = require('express-validator');
require("dotenv").config();
const secretKey = process.env.SALT_KEY; 


//Route 1 : Creating user /api/auth/createuser - no auth required
route.post(("/createuser"),[body('email',"Should be a valid email").isEmail()], async (req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt);
        //Saving user
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            password:secPass
        })

        //Data for Jwt token
        const data = {
            userData:{
                ID : user.id
            }
        }
        //creating jwt token
        const authToken = await jwt.sign(data,secretKey);
        return res.status(200).send({token:authToken});
      } catch (error) {
        //Handling the error
        if (error.name === "ValidationError") {
          return res.status(400).send({error:error.message});
        }
        res.status(500).send({error:error.message});
      }
})


//Route 2 : Validating user /api/auth/login - no auth required
route.post(("/login"),[body('email',"Should be a valid email").isEmail(),check('password',"Cannot be empty").not().isEmpty()],async (req,res)=>{
    const errors = validationResult(req);
    let success = false;
    if(!errors.isEmpty()){
        return res.status(400).json({error:"User does not exists"});
    }
    try{
        const {email,password} = req.body;
        let user = await User.findOne({email});
    
        if(!user){
            return res.status(400).json({error:"User does not exists"}); 
        }     
        const passwordCompare = await bcrypt.compare(password,user.password);

        if(!passwordCompare){
            return res.status(400).json({error:"Enter a correct password"});
        }
        //Data for Jwt token
        const data = {
            userData:{
                ID : user.id
            }
        }
        //creating jwt token
        const authToken = jwt.sign(data,secretKey);
        success = true;
        const token={success,token:authToken};
        res.status(200).send(token);

    }catch(error){
        console.error(error.message);
        res.send(error);
    }
})


//Route 3 : Get User /api/auth/getuser - Auth required
route.post("/getuser",fetchuser, async (req,res)=>{
    try{
        const userId = req.user.ID;
        const user =await User.findById(userId).select("-password");   
        res.send(user);
    }catch(error){
        res.send(error);
    }
})

module.exports = route