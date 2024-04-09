require('dotenv').config();
const express = require('express');
const app = express(); //Crea una nueva app express en la variable app

// Para poder utilizar el modulo de mongoose
const mongoose = require('mongoose');

(async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI_TEST)
        console.log('Te has conectado a MongoDB');
    } catch (error) {
        console.log(error);
    }
})()

// Luego de esto debemos iniciar nuestro servidor
module.exports = app;