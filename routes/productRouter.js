import express from 'express';
import { getProduct } from '../controllers/productController.js';
const productRouter=express.Router();
productRouter.get("/",getProduct);
export default productRouter;