const mongoose = require('mongoose');
const { Schema } = mongoose;


//Email Validating Method
const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

//Creating schema for user of ibook
const UserSchema = new Schema({
    Name:{
        type:String,
        required:true,
        minLength: [3, 'Length should be minimum 3']
    },
    Email:{
        type:String,
        required:true,
        unique: [true,'Email already existed'],
        validate: [validateEmail, 'Please fill a valid email address']
    },
    Mobile:{
        type:String,
        required:true,
        unique:true,
        minLength: [10, 'Invalid Number'],
        maxLength: [10, 'Invalid Number']
    },
    Password:{
        type:String,
        required:true,
        minLength: [5, 'Minimum 5 Characters'],
        maxLength: [9, 'Not more then 9 Characters']
    },
    Date:{
        type:Date,
        default:Date.now 
    },
},{collection : 'User_Data'})

 module.exports = mongoose.model("user",UserSchema);