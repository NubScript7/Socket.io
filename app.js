const express = require('express');

const app = express();

const http = require('http');

const server = http.createServer(app);

const io = require('socket.io');

io.on('connection', (socket) => {

  socket.on("req-num",()=>{
  
    io.emit("test","test request.")    
    
  })
  
  socket.on("req-get",(ev,data)=>{
    io.emit(ev,data)
  })
  
});

const port = process.env.PORT || 3000;

server.listen(port, () => {

  console.log(`Server listening on port ${port}`);

});

