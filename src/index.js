const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

console.log(path.join(__dirname,'../public'));
const staticPath = path.join(__dirname,'../public');
const partialPath = path.join(__dirname,'../templates/partials');

//to set the view engine
app.set('views', '../templates');
app.set('view engine', 'hbs');

hbs.registerPartials(partialPath);

app.get("", (req, res)=>{
    res.render('index', {
        myName : "Deepak Sahu"
    });
});

// builtin middleware
// app.use(express.static(staticPath));

app.get("/", (req, res)=>{
    res.send("Hello from Express");
});

app.get("/about", (req, res)=>{
    res.send("Hello from about page Express");
});

app.listen(8000,"127.0.0.1", ()=>{
    console.log("Listening at 8000")
});