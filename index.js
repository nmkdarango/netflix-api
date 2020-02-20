const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

//Endpoint
server.get('/', (req,res)=> res.send('Hello world!'));

server.listen(PORT, ()=> console.log('Server on port '+PORT));