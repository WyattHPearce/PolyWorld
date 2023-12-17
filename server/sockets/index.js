function handleConnection(socket) {
    console.log(`Connection Recieved - Socket ID: ${socket.id}`);

    socket.on("mouse", (data) => {
        console.log(`MouseX: ${data.mouseX}, MouseY: ${data.mouseY}`);
        socket.broadcast.emit('draw', {
            x: data.mouseX,
            y: data.mouseY
        });
    });

    socket.on("disconnect", function() {
        console.log(`Connection Terminated - Socket ID: ${socket.id}`);
    });
};

module.exports = {
    handleConnection
};