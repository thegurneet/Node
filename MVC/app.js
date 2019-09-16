const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./util/path');
const errorController = require('./controllers/error')

const app = express();

//Setting the views engine
app.set('view engine', 'ejs');
app.set('views', 'DynamicWithNode/views')
//set the route for the views folder




//Loading the Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


// Using the Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);

app.listen(3000, ()=>{
    console.log("Server started on Localhost:3000")
});
