import express from 'express';
const productRouter=express.Router();
productRouter.get("/",(req,res)=>
{
    res.json({message: "welcome to product page"});
});
export default productRouter;