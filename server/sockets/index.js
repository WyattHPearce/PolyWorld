function handleConnection(socket) {
    console.log(`Connection Recieved - Socket ID: ${socket.id}`);

    socket.on("happy", function(data){
        console.log(`"Happy" recived by ${socket.id}, for reason: ${data.reason}`);
    });

    socket.on("disconnect", function() {
        console.log(`Connection Terminated - Socket ID: ${socket.id}`);
    });
};

module.exports = {
    handleConnection
};