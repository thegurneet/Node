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

//Controllers
const userController = require('./controller/userController'); 
const errorController = require('./controller/error')


app.use(bodyParser.urlencoded({extended: false}));


// Using the routes
app.use('/users', userData.routes); 

app.use(viewUser);



//If status = 404; 
app.use(errorController.get404); 


app.listen(2000,()=>{
    console.log("Server started on Localhost:2000");
})