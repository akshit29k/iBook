const mongoose = require('mongoose');
const { Schema } = mongoose;




//Creating schema for user of ibook
const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
        minLength: [3, 'Length should be minimum 3']
    },
    email:{
        type:String,
        required:true,
        unique: [true,'Email already existed']
    },
    mobile:{
        type:String,
        required:true,
        unique:[true,'Number already existed'],
        minLength: [10, 'Invalid Number'],
        maxLength: [10, 'Invalid Number']
    },
    password:{
        type:String,
        required:true,
        minLength: [5, 'Minimum 5 Characters']
    },
    Date:{
        type:Date,
        default:Date.now 
    },
},{collection : 'User_Data'})

 module.exports = mongoose.model("user",UserSchema);