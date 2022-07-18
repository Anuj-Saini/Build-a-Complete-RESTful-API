const express=require("express");
const router = require("./router/router");
const app=express();
require("./db/conn");
app.use(express.json());
app.use(router);
const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`application is running at the ${port} number`);
})