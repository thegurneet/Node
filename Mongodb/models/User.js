const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

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

module.exports = mongoose.model('users', UserSchema);