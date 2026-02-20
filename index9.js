
import express from "express";
const app = express();
app.listen(8080);

const logger = (req, res, next) => {
    if(req.url === "/1234") {
        next();
        
    }
    else{
        res.send("Invalid URL");
    }
    
};
app.use(logger);
app.get("/1234", (req, res) => {
    res.send("Welcome to the protected route!");  
});  
// app.use(logger);


