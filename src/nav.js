const express = require('express');

const app = express();

// app.get("/", (req, res)=>{
//     res.status(200).send("home")
// })
app.get("/home", (req, res)=>{
    res.status(200).send("home")
})
app.get("/about", (req, res)=>{
    res.status(200).send("about")
})
app.get("/contact", (req, res)=>{
    res.status(200).send("contact")
})

app.get('*', function(req, res){
    res.status(404).send('what???');
  });
app.listen(8000, "127.0.0.1", ()=>{});