const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/men100",{

}).then(()=>{
    console.log("connection connected sucussfully");
}).catch((err)=>{
console.log("no connection");
})
