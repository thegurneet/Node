const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/animals');
mongoose.connection.once('open' , ()=>{
    console.log('Connected')
}).on('error', (err)=>{
    console.log(' Could not connect : ' + err)
})


const newUser = new User({
    firstName : "Gurneet",
    lastName: "Singh", 
    isActive: 1
});

// newUser.save(function(err,data){
//     if(err) { 
//         return err; 
//     } else { 
//         console.log( ' Data saved : ' + data);
//     }
// });