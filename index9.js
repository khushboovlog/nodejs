import express from "express";
const app = express();
const token = Math.round(Math.random() * 100000 ).toString()
app.use(express.json());

const auth = (req, res, next) => {
    const val = req.headers.authorization
    const tokenValue = val.split(" ")
    if(tokenValue[1] === token) next()
    else res.send("unauthrized")
};

app.get("/", auth,(req, res) => {
    res.send("Welcome");
});

app.post("/login", (req, res) => {
    if(req.body.email === "john@gmail.com" && Number(req.body.password) === 1234){
        res.send(token)
    }
    else{
        res.send("invalid credentials")
    }
    
})


app.listen(8080, () => {
  console.log("server is live");
});