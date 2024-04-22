const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = 3000;

app.use(bodyparser.json());
app.post("/conversation",(req,res)=>{
    console.log(req.body);
    res.send({
        msg :  "hi there 2+2"
    })
})

app.listen(port);