const mongoose = require('mongoose');

const UserModel = mongoose.model('user', {


    firstName: {
        type:String, 
        required: true, 
        trim: true
    }, 

    lastName: { 
        type:String, 
        required: true, 
        trim: true
    }, 
    isActive: { 
        type: Number,
        default: 0
    }
}); 

module.exports = UserModel;