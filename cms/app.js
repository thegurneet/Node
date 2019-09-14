const express = require('express');
const app = express(); 
<<<<<<< HEAD
const path = require('path');
const expressHandlebars = require('express-handlebars');

app.use(express.static(path.join(__dirname + '/public')))
app.engine('handlebars',expressHandlebars({defaultLayout : 'home'}))    //template engine   looks inside views->layout by default. 
app.set('view engine','handlebars');

var view = path.join(__dirname +  '/views')
app.set('views', view)

app.get('/',(req,res)=>{
    res.render('home/index')
})

app.get('/about',(req,res)=>{
    res.render('home/about')
})


app.listen(4500, ()=>{
    console.log("Server started on 4500");
    console.log(__dirname)
})



=======

app.listen(4500, ()=>{
    console.log('Server started on 4500')
})
>>>>>>> 890e9d8a602eacae2cbb02987bc66812751c7a73
