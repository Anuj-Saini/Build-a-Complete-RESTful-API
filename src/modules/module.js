const mongoose=require("mongoose");
const runnerSchema=new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        trim:true,
        required:true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true,
    },
    Country:{
        type:String,
        trim:true,
        required:true,
    },
     Event:{
        type:String,
        default:"100m",
    }
})
const MenRanking=new mongoose.model("MenRanking",runnerSchema);
module.exports=MenRanking;