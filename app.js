// Node utility imports
const path = require('path'); // Import the 'path' module

// Server imports
const express = require('express');               // Importing the Express module
const app = express();                            // Creating an instance of Express
const server = require('http').createServer(app); // Create HTTP server instance from express
const io = require('socket.io')(server);          // Initialize Socket.io with the HTTP server
const port = 3000;                                // Setting the port number

// Express Middleware
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});
app.use(express.static(path.join(__dirname, 'client')));

// Socket.IO communication
io.on('connect', function(socket) {
    console.log(`Connection recived. Client ID: ${socket.id}`);

    socket.on("disconnect", function() {
        console.log(`Connection terminated. Client ID: ${socket.id}`);
    });
});

// Starting server
server.listen(port, () => {
    console.log(`Express server with Socket.IO is running on port: ${port}`);
});

