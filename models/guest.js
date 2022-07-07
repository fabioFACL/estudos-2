const mongoose = require('mongoose')

const guestSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    hotel:{
        type: String,
        required: true
    },
    checkIn:{
        type: Date,
        required: true
    }
})