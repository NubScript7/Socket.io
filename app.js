const express = require('express');

const app = express();

const http = require('http');

const server = http.createServer(app);

const io = require('socket.io');

io.on('connection', (socket) => {

  
  
});

const port = 3000;

server.listen(port, () => {

  console.log(`Server listening on port ${port}`);

});

