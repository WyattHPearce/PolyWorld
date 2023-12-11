// Start the Socket.IO connection to the server
export function setupSocket(){
  const socket = io();

  socket.on('connect', () => {
    console.log(`Current sockets client ID: ${socket.id}`);
  });
}
