// const app = require('./app'); //Creando un protocolo de transferencia
// const http = require('http');
// const server = http.createServer(app);

// server.listen(3000, ()=>{
//     console.log('El servidor esta corriendo');
// })


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 9000;

app.listen(port, ()=>console.log('server listen on port', port));

app.get('/',(req,res)=>{
    res.send('Bienvenido al servidor')
})