const app = require('./app'); //Creando un protocolo de transferencia
const http = require('http');
const server = http.createServer(app);

server.listen(3000, ()=>{
    console.log('El servidor esta corriendo');
})