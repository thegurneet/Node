const express = require('express');
const app = express(); 
const path = require('path');
const expressHandlebars = require('express-handlebars');




app.use(express.static(path.join(__dirname + '/public')))

//set View Engine
app.engine('handlebars',expressHandlebars({defaultLayout : 'home'}))    //template engine   looks inside views->layout by default. 
app.set('view engine','handlebars');

// set View Path
var view = path.join(__dirname +  '/views')
app.set('views', view)


//Load the Routes
const home = require('./routes/home/index');
const admin = require('./routes/admin/index');
//Use the Routes
app.use('/', home);
app.use('/admin', admin)



// Start the Server
app.listen(4500, ()=>{
    console.log("Server started on localhost:4500");
})



