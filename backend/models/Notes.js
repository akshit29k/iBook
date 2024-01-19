const mongoose = require('mongoose');
const { Schema } = mongoose;

//Creating schema for notes of user of ibook
const NoteSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"general"
    },
    Date:{
        type:Date,
        default:Date.now 
    },
},{collection : 'User_Notes'})

module.exports = mongoose.model("note",NoteSchema);