function handleConnection(socket) {
    console.log(`Connection recived. Client ID: ${socket.id}`);

    socket.on("disconnect", function() {
        console.log(`Connection terminated. Client ID: ${socket.id}`);
    });
};

module.exports = {
    handleConnection
};