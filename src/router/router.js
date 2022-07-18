const express=require("express");
const router=new express.Router();
const MenRanking=require("../modules/module");
router.get("/",async (req,res)=>{
    res.send("listion to the another side");
})
router.post("/mens", async(req,res)=>{
    try {
    console.log(req.body);
    const addingData= new MenRanking(req.body);
    const sendData= await addingData.save();
    res.status(201).send(sendData);
        
    } catch (e) { res.status(400).send(e);}
    
})
router.get("/mens", async(req,res)=>{
    try {
    const readData=await MenRanking.find({});
    res.send(readData);
        
    } catch (e) { res.status(400).send(e);}
    
})
router.get("/mens/:id",async (req,res)=>{
try {
    const _id=req.params.id;
    const getData=await MenRanking.findById({_id});
    console.log(getData);
    if(!req.params.id){
        res.status(400).send();
    }
    else{
        res.status(201).send(getData);
    }
    
} catch (e) {
    res.status(500).send(e);
}
})
router.get("/mens", async(req,res)=>{
    try {
    const readData=await MenRanking.find({}).sort('field').exec(function(err, docs) {  });
    res.send(readData);  
    } catch (e) { res.status(400).send(e);}
    
})
router.patch("/mens/:id",async (req,res)=>{
    try {
        const _id=req.params.id;
    const update_data= await MenRanking.findByIdAndUpdate(_id,req.body,{
        new:true
    });
    console.log(update_data);
    if(!req.params.id){
        res.status(404).send();
    }
    else{res.send(update_data);}
    
    } catch (error) {
        res.status(500).send(error);
    }
    })
router.delete("/mens/:id",async (req,res)=>{
        try {
            const _id=req.params.id;
        const update_data= await MenRanking.findByIdAndDelete(_id);
        console.log(update_data);
        if(!req.params.id){
            res.status(404).send();
        }
        else{res.send(update_data);}
        
        } catch (error) {
            res.status(500).send(error);
        }
        })
module.exports=router;