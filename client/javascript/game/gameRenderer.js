import { 
    updateFPS, 
    getFPSstring 
} from "./utility.js";

// Get the canvas element from DOM
const canvas = document.getElementById("drawspace");
// Get the 2d rendering context for the canvas
const ctx = canvas.getContext("2d");

export function setup() {
    // Setup code
}

export function draw() {
  updateFPS(performance.now());

  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Render gamespace objects
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.font = "20px Arial";
  ctx.fillText(getFPSstring(), 10, 30);

  requestAnimationFrame(draw);
}

export function startGame() {
  setup();
  requestAnimationFrame(draw);
}