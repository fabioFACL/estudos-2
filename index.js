const express = require('express')
const nodemon = require('nodemon')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://teste:teste123@cluster0.9iqak.mongodb.net/?retryWrites=true&w=majority', err =>{
    if (err) return console.log(err)

    console.log('DB Connected')
})



app.listen(4000, ()=>{
    console.log('servidor iniciado!')
})
