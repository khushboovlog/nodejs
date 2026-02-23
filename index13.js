
import express from 'express';
import bcrypt from 'bcrypt';

const app = express();
app.listen(8080,()=>
{
    console.log("server is starting");
});
app.use(express.json());
const users=[];
app.post("/signup",(req,res)=>
{
    const body=req.body;
    const hasPassword=bcrypt.hashSync(body.password,10);
    body.password=hasPassword;
    users.push(body);
    res.json(users);
}
);
app.post("/login",async (req,res)=>
{
    const {email,password}=req.body;    
    const user=users.find((u)=>u.email===email);
    const ckPassword=await bcrypt.compare(password,user.password);
    if(ckPassword) res.send("login successful");
    else res.send("invalid credentials");
});
