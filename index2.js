

import express from 'express';
const app=express()
app.listen(8080,()=>
{
    console.log("server started")
});
app.get("/",(req,res)=>{
    //res.send(req.url)
    res.send("respones from server")
}
)
