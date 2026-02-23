
import express from 'express';
import jwt from 'jsonwebtoken';
const secretKey = "mysecretkey";
const app = express();
app.listen(8080,()=>
{
    console.log("server is starting");
});
const user={
    name:"john",
    email:"john@example.com",
    role:"student"
}
const token=jwt.sign(user,secretKey,{expiresIn:"1h"});
console.log("Generated JWT:", token);
//app.use(express.json());