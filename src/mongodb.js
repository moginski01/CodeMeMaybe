const mongoose = require("mongoose")
// coś osatnio napis LocalHost sie psuje i musi być jako 127...
mongoose.connect("mongodb://127.0.0.1:27017/BackendLogin")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection1",LogInSchema)

module.exports=collection



