
import express from 'express';
const app=express();
app.listen(8080,()=>
{
    console.log("server started")
});
app.use(express.json());

const user=[{
        id:1,
        name:"jhon",
        email:"jhon@example.com",
        role:"student",
    },
    {id:2,name:"jane",email:"jane@example.com",role:"teacher"},
    {id:3,name:"doe",email:"doe@example.com",role:"admin"}];
app.get("/:id",(req,res)=>{
    const found=user.find(u=>u.id===parseInt(req.params.id))
    
    res.json(found);
})
app.post("/",(req,res)=>{
    const newUser=req.body;
    user.push(newUser);
    res.json(user);
});
app.delete("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const index=user.findIndex(u=>u.id===id);
    if(index!==-1){
        user.splice(index,1);
        res.json({message:"user deleted"});
    }
    else{
        res.status(404).json({message:"user not found"});
    }
})