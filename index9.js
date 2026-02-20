
import express from "express";
const app = express();
app.use(express.json());
app.listen(8080);

const logger = (req, res, next) => {
    const newuse=req.body;
    console.log(newuse);

    if(Number(newuse.token) === 1234) {
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
app.post("/1234", logger, (req, res) => {
    res.send("Welcome to the protected route!");
});
// app.use(logger);


