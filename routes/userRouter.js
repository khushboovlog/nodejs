import express from 'express';
const userRouter=express.Router();
userRouter.get("/",(req,res)=>
{
    res.json({message: "welcome to home page"});
});

export default userRouter;