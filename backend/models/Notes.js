const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Tag:{
        type:String,
        default:"general"
    },
    Date:{
        type:Date,
        default:Date.now 
    },
})

export default mongoose.model("note",NoteSchema);