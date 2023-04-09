//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/codial_development');

//acquire the DB to check wheather connected or not
const db= mongoose.connection;

//if error
db.on('err', console.error.bind(console, 'error connecting to db'));

//up and running the database 
db.once('open', function(){
    console.log('successfully connected to database!')
});

module.exports = db;

