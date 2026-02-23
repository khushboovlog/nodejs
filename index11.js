
import express from'express';
const app=express();
app.listen(8080,()=>
{
    console.log("server is starting");
})
app.use(express.static("public"));
