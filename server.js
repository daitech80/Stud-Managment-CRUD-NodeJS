const bodyparser = require("body-parser");
const connode = require('./server/databse/conndb');
const dotenv = require('dotenv')
const express = require('express');
const morgan = require('morgan');
const path = require('path')


const app = express();



//dotenv.config({path: 'config.env'})
const PORT = process.env.PORT||8080
//log request
app.use(morgan('tiny'))
connode();
// mongodb connection
//parse vrequest to body pasrer
app.use(bodyparser.urlencoded({extended: true}))
//set view engines
app.set("view engine", "ejs")
app.set("views",)
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//loading the router
app.use('/', require('./server/routes/router'))
app.get('/', (req, res) => {
    res.render("index")
})


app.listen(3000, ()=> {console.log(`server is running on http://localhost:${3000}`)});
