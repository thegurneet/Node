const User = require('../model/user');


exports.getView = (req,res,next)=>{
    res.render('addUser')
}


exports.addUser = (req,res,next) => { 
    const newUser = new User(req.body.name);
    newUser.save();
    res.redirect('/');
}


exports.getListOfUsers = (req,res,next)=>{
    let allUsers = User.getAll();
    res.render('allUsers', { 
        prods: allUsers, 
        pageTitle: 'All Users', 
        path: '/', 
    })
}



