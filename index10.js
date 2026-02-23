
import express from 'express';
const app = express();
app.listen(8080, () => {
    console.log("server is live");
})
app.get("/", (req, res) => {
    res.json({message: "Welcome"});
})
app.use(express.json());