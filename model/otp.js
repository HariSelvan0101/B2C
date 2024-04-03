const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({

    otp:{
        type:Number,
        required:true

    },
    email:{
        type:String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('otp',otpSchema)
