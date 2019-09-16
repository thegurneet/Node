const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 

// Setting the views engine
app.set('view engine', 'ejs'); 
//set the route for the views folder
app.set('views', 'EJS&Node/views')

//Loading the routes..
const userData = require('./routes/addUsers'); 
const viewUser = require('./routes/viewUser');


app.use(bodyParser.urlencoded({extended: false}));


// Using the routes
app.use('/users', userData.routes); 
app.use(viewUser);


app.use((req,res,next)=>{
    res.status(404).render('404',{ pageTitle: ' Page Not Found'});
})


app.listen(2000,()=>{
    console.log("Server started on Localhost:2000");
})