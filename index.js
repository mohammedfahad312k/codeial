const express = require('express');
const port = 8001;
const app = express();
const db = require('./config/mongoose');
const cookie_parser= require('cookie-parser');

app.use(express.urlencoded());

app.use(cookie_parser());

//use of expresslayout in main file
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);
//any request will route through routes folder
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');

//static folder
app.use(express.static('./assets'));

//extract style and script from sub pages into layout 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.listen(port, function(err){
    if(err){
        // console.log('error in starting server', err);
        //another way of writing using interpolation
        console.log(`error in starting server: ${err}`);
    }
    console.log(`successfull server started on port: ${port}`);
})