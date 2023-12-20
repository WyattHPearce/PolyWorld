const express = require('express');               // Importing the Express module
const app = express();                            // Creating an instance of Express
const server = require('http').createServer(app); // Create HTTP server instance from express
const socket = require('socket.io');          // Initialize Socket.io with the HTTP server
const io = socket(server);
const port = process.env.PORT || 3000;                                // Setting the port number
const path = require('path');                     // Import the 'path' module

// Routes
app.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});
app.use(express.static(path.join(__dirname, 'client')));

// Socket.IO
var SOCKET_LIST = [];

io.on('connect', function(socket){
    // Initial connection
    console.log(`Connection Recieved - Socket ID: ${socket.id}`);

    SOCKET_LIST.push(socket);
    socket.x = 0;
    socket.y = 0;

    socket.on("keyInput", function(data){
        if(data.LEFT){
            socket.x -= 1;
        }
        if(data.RIGHT){
            socket.x += 1;
        }
    });

    // Disconnection
    socket.on("disconnect", function() {
        console.log(`Connection Terminated - Socket ID: ${socket.id}`);

        // Index of the disconnected socket
        const socketIndex = SOCKET_LIST.findIndex(sock => sock.id === socket.id);
        // Remove the socket from the list if found
        if (socketIndex !== -1) {
            SOCKET_LIST.splice(socketIndex, 1);
        }
    });
});

setInterval(() => {
    for(let i = 0; i < SOCKET_LIST.length; i++){
        var socket = SOCKET_LIST[i];
        socket.emit("newPosition", {
            x: socket.x,
            y: socket.y
        });
    }
}, 1000/25);

// Starting server
server.listen(port, () => {
    console.log(`Express server with Socket.IO is running on port: ${port}`);
});