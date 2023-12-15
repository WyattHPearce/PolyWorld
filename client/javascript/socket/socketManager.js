const socket = io();

socket.on("connect", () => {
  console.log(`Current sockets client ID: ${socket.id}`);
  happy(socket);
});

function happy(socket) {
  let data = {
    reason: "Im understanding sockets!",
  };
  socket.emit("happy", data);
  console.log(`Told the server I'm happy because ${data.reason}!`);
}
