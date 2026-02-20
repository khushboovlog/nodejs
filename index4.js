


import express from 'express';
const app=express()
app.listen(8080,()=>
{
    console.log("server started")
});
/*app.get("/:id/:email",(req,res)=>{
    //res.send(req.url)
    res.send("hello")
    console.log(req.headers.authorization)
}
)

app.get("/id/:id/email/:email",(req,res)=>{
    //res.send(req.url)
    res.send(req.params.id+req.params.email)
    console.log(req.headers.authorization)
}
)*/
app.get("/a/b/c",(a,b)=>{
    //res.send(req.url)
    //const sum=parseInt(req.params.a)+parseInt(req.params.b)+parseInt(req.params.c)
    b.send(a.params)
    //console.log(req.headers.authorization)
}
)
//or u can use query params
app.get("/",(a,b)=>{
    console.log(a.query)
})