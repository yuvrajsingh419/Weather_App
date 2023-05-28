const express = require("express");
const path = require('path')
const app = express();
const hbs = require('hbs')
const port = process.env.port || 5000;

const staticPath = path.join(__dirname,"../public")
const temppath = path.join(__dirname,'../template/views')
const partPath = path.join(__dirname,"../template/partials")

app.set('view engine','hbs');
app.set('views',temppath)
app.use(express.static(staticPath))
hbs.registerPartials(partPath)



app.get("/", (req, res) => {
    // res.send("This is our home page");
    res.render("index");
});

app.get("/about", (req, res) => {
    // res.send("This is our about page");
    res.render("about")
});

app.get("/weather", (req, res) => {
    // res.send("THIS IS OUR WEATHER PAGE");
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404error",{
        errorMsg : 'Oops! Page Not Found'
    })
});





app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
