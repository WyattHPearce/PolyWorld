const express = require('express');               // Importing the Express module
const app = express();                            // Creating an instance of Express
const server = require('http').createServer(app); // Create HTTP server instance from express
const io = require('socket.io')(server);          // Initialize Socket.io with the HTTP server
const port = 3000;                                // Setting the port number
const path = require('path');                     // Import the 'path' module

// Routes
app.use(express.static(path.join(__dirname, 'client')));
app.get('/', function(req, res, next){
    console.log(req);
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Socket.IO
const sockets = require('./server/sockets');
io.on('connect', sockets.handleConnection);

// Starting server
server.listen(port, () => {
    console.log(`Express server with Socket.IO is running on port: ${port}`);
});

