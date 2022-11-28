const express = require('express');
const app = express();
const http = require('http');

const servidor = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(servidor);

io.on('connection', (socket) =>{
   // console.log('un usuario se ha conectado');
   //socket.on('disconnect', () =>{});

   /*socket.on('chat', (mensaje)=>{
    console.log('mensaje: '+mensaje);
   });*/

    socket.on('chat', (mensaje)=>{
        io.emit('chat',mensaje );
    });

});


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/cliente/cliente.html`);
});


servidor.listen(3000, ()=> {
    console.log('Servidor corriendo en http://localhost:3000');
});