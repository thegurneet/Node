const path = require('path');
const express = require('express');


const rootDir = path.dirname(process.mainModule.filename);

const router = express.Router(); 


const users = []; 

router.get('/addUser', (req,res)=>{
    res.render('addUser')
}); 

router.post('/addUser', (req,res,next)=>{
    users.push({name: req.body.name})
    res.redirect('/');
    console.log(users)
}); 

exports.routes = router; 
exports.users = users;