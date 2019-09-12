const express = require('express');
const User = require('./models/User');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');



mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set( 'useCreateIndex', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect('mongodb://localhost:27017/login', ()=>{
    console.log('connected');
});


app.post('/register',(req,res)=>{
    const newUser = new User();
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) return err;
            newUser.password = hash;
            newUser.save().then(savedUser=>{
                res.send(" User Saved : " + newUser)
            }).catch(err=>{
                res.send('USER was not saved because... : ' + err)
            })

        })
    })

})


app.post('/login', (req,res)=>{
    User.findOne({email: req.body.email}).then(user=>{
        if(user) { 
            bcrypt.compare(req.body.password, user.password, (err,matched)=>{

                if(err) return err;
                if(matched){
                    res.send('USER Was able to login')
                }else{ 
                    res.send('User not able to login')
                }
            })
        }
    })
})





app.listen(4111, ()=>{
    console.log('Server started on 4111');
})