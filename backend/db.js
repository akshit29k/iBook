const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/ibook';

//Method for connecting to database 
const connectToMongo = async()=>{
    try{
        await mongoose.connect(mongoUri)
        console.log("connected to mongo")
    }catch(e){
console.log("error");
    }
}

module.exports = connectToMongo;