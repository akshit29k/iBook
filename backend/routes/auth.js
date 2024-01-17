const express = require('express');
const route = express.Router();
const User =  require('../models/User');

//Creating user 
route.post(("/"), async (req,res)=>{
    try {
        //Saving user
        const user = User(req.body);
       await user.save();
        res.status(200).send(user);
      } catch (error) {
        //Handling the error
        if (error.name === "ValidationError") {
          let errors = {};
    
          Object.keys(error.errors).forEach((key) => {
            errors[key] = error.errors[key].message;
          });
    
          return res.status(400).send(errors);
        }
        res.status(500).send(error.message);
      }
})

module.exports = route