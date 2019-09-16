const path = require('path');
const express= require('express'); 

const rootdir = path.dirname(process.mainModule.filename);

const router = express.Router(); 

const userData = require('./addUsers'); 

router.get('/', (req,res,next)=>{
     const users = userData.users;
     console.log(users)
     res.render('allUsers', { 
         prods: users, 
         pageTitle: 'All Users', 
         path: '/', 
         hasUsers: users.length > 0, 
     })
}); 


module.exports = router;
