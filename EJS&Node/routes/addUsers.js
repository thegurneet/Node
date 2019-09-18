const path = require('path');
const express = require('express');


const rootDir = path.dirname(process.mainModule.filename);

const router = express.Router(); 

const userController = require('../controller/userController')




//add User  /user/addUser => POST
router.post('/addUser', userController.addUser)

//Set addUser View 
router.get('/addUser', userController.getView)

exports.routes = router; 
