const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const CompanySchema = new Schema({

    name: { 
        type:String, 
        required: true, 
        trim: true

    }, 

    country: {
        type:String, 
        required: true, 
        trim: true
    }, 

    currency: { 
        type: Number , 
        required: true, 
    }, 
    company: { 
        type:String, 
        required: true, 
        trim: true
    }

})

module.exports = mongoose.model('accounts' , CompanySchema)