const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://grazyfunk04:Mkunal_0410@myapp.xchzslg.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log(e);
})

const LogInSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true,
    }
})

const collection = new mongoose.model('collection1', LogInSchema)

module.exports=collection
