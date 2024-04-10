const express = require('express')
const http = require('http')
const path = require("path")
const { Server } = require("socket.io");
const { message } = require('statuses');
const app = express() 
const server = http.createServer(app)


const io = new Server(server);


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  });
  
app.use(express.static(path.resolve("./public")))


app.get("/",(req,res)=>{
    return res.sendFile("/public/index.html")
})

server.listen(8000,()=> console.log("Server is Running in PORT 9000"))