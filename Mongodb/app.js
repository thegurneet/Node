const mongoose = require('mongoose');
const User = require('./models/User');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();



mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.Promise = global.Promise; 



mongoose.connect('mongodb://localhost:27017/animals');
mongoose.connection.once('open' , ()=>{
    console.log('Connected')
}).on('error', (err)=>{
    console.log(' Could not connect : ' + err)
})


app.get('/', (req,res)=>{
    res.send(' Connected ')
})

app.post('/users', (req,res)=>{
        console.log('hit')
    const newUser = new User({
        firstName : req.body.firstName,
        lastName :  req.body.lastName,
        isActive :  req.body.isActive
        
    })
    newUser.save().then(savedUser=>{
        res.send('USER SAVED')
    })
});


app.get('/getUser' , (req,res)=>{
    User.find({}).then(users=>{
        res.send(users)
    })
})

app.get('/getUserById/:id', (req,res)=>{
    User.findById({_id: req.params.id}).then(user=>{
        res.send(user)
    })
})

app.delete('/deleteUser/:id',(req,res)=>{
    User.findByIdAndRemove({_id: req.params.id}).then(
        res.send(`User removed`)
    ).catch(err=>console.log(err));
})



app.listen(9876);