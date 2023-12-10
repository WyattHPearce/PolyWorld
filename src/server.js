const express = require('express');     // Importing the Express module
const app = express();                  // Creating an instance of Express
const port = 3000;                      // Setting the port number

const server = app.listen(port, () => { // Starting the server on port 3000
    console.log("Node.js server is running with express"); // Server side start message
});

// Middleware for root directory to serve any requested files from public
app.use('/', express.static('public'));