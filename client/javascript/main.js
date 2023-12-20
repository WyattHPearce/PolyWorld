import { initializeControls } from "./controlManager.js";

const socket = io();

let playerPosition = { x: 0, y: 0 }; // Initialize position

socket.on("connect", () => {
  console.log(`Current sockets client ID: ${socket.id}`);
});
socket.on("newPosition", function (data) {
  playerPosition = data;
});
export function sendKeyInput(data){
    socket.emit("keyInput", data);
}


// Render code
var canvas = document.getElementById("drawspace");
var ctx = canvas.getContext("2d");

function setup() {
  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  initializeControls();

  // Event listener for window resize
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";
  ctx.fillRect(playerPosition.x, playerPosition.y, 50, 50); // Use stored position data
  requestAnimationFrame(draw);
}

setup();
draw();
