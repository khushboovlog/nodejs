


import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const secretKey = "mysecretkey";


const middleware=(req,res,next)=>
{
    const authHeader=req.headers.authorization;
    if(!authHeader) return res.status(401).json({message:"Authorization header missing"});
    const token=authHeader.split(" ")[1];
    try {
        jwt.verify(token,secretKey);
        console.log("middleware executed");
        next();
    } catch (err) {
        res.status(401).json({message:"Invalid token"});
    }
}
const authorize=(role)=>
{
    return (req,res,next)=>
    {
        const authHeader=req.headers.authorization;
        if(!authHeader) return res.status(401).json({message:"Authorization header missing"});
        const token=authHeader.split(" ")[1];
        try {
            const decoded=jwt.verify(token,secretKey);
            res.json(decoded);
            if(decoded.role===role)
            {
                req.user=decoded;
                next();
            }
            else
            {
                res.status(403).json({message:"Access denied"});
            }
        } catch (err) {
            res.status(401).json({message:"Invalid token"});
        }
    }
}
export {middleware,authorize};