const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    capacity:{
        type: Number,
        required: true
    },
    occupancy:{
        type: Number,
        required: true
    },
    pool:{
        type: Boolean,
        required: true
    },
    guest:{
        type: Array,
        required: false
    }
})