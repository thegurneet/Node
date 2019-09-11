const mongoose = require('mongoose');
const User = require('./models/User');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();



mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));

mongoose.Promise = global.Promise; 



mongoose.connect('mongodb://localhost:27017/animals');
mongoose.connection.once('open' , ()=>{
    console.log('Connected')
}).on('error', (err)=>{
    console.log(' Could not connect : ' + err)
})


app.get('/', function(req,res){
    res.send(' Connected ')
})

app.post('/addUser', (req,res)=>{
        console.log('hit')
    const newUser = new User({
        firstName : req.body.firstName,
        lastName :  req.body.lastName,
        isActive:  req.body.isActive
        
    });

    newUser.save().then(savedUser=>{
        res.send('saved user');
    }).catch(err=>{
        req.status(404).send('User has not been saved')
    })


});






app.listen(9876);