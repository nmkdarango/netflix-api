const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

//Endpoint
server.get('/', (req,res)=> res.send('Hello world!'));


module.exports = { server, PORT};