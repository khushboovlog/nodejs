
import express from 'express';
const app = express();
app.listen(8080,()=>
{
    console.log("server is starting");
});
const userRouter=express.Router();
const productRouter=express.Router();
userRouter.get("/",(req,res)=>
{
    res.json({message: "welcome to home page"});
});
productRouter.get("/",(req,res)=>
{
    res.json({message: "welcome to product page"});
});
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use(express.json());