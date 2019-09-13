const express = require('express'); 
const mongoose = require('mongoose');
const app = express(); 
const Account = require('./models/Company');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require("path");



mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.Promise = global.Promise; 

mongoose.connect('mongodb://localhost:27017/animals');

var data = path.join(__dirname + '/smallData.json')

app.get('/data', (req, res) => {
    try {
        res.status(200).send(JSON.parse(fs.readFileSync(data, 'utf8')));
    } catch(error) {
        res.status(500).send({
            error: error.message
        })
    }
});

app.post('/users' , (req,res)=>{
    console.log('Adding User'); 

    const newAccount = new Account({
        name : req.body.name,
        country : req.body.country,
        currency: req.body.currency,
        company: req.body.company
    })

    newAccount.save().then(savedAccount=>{
        res.send('account Saved')
    })
})


app.listen(1234, ()=>{
    console.log('Server started on 1234')
})