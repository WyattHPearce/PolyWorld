// Socket.IO setup
const socket = io();

socket.on("connect", () => {
  console.log(`Current sockets client ID: ${socket.id}`);
});

socket.on("draw", (data) => {
  fill(0,255,255);
  rect(data.x, data.y, 10, 10);
});