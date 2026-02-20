
import express from "express";
const app = express();
app.use(express.json());
app.listen(8080);

const logger = (req, res, next) => {
    const newuse=req.body;
    console.log(newuse);

    if(newuse.token === "/1234") {
        next();
        
    }
    else{
        res.send("Invalid URL");
    }
    
};
app.use(logger);
/*app.get("/1234", (req, res) => {
    res.send("Welcome to the protected route!");  
}); */ 
app.post("/1234",(req,res)=>{
    const newUser=req.body;
    user.push(newUser);
    res.json(user);
}
);
// app.use(logger);


