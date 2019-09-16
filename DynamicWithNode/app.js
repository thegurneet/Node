const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./util/path');


const app = express();

//Setting the views engine
app.set('view engine', 'ejs');
app.set('views', 'DynamicWithNode/views')
//set the route for the views folder




//Loading the Routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


// Using the Routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).render('404' , {pageTitle: 'Page Not Found'});
});

app.listen(3000, ()=>{
    console.log("Server started on Localhost:3000")
});
