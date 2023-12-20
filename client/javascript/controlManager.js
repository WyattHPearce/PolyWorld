import { sendKeyInput } from "./main.js";

var keys = {
    UP: false,
    DOWN: false,
    LEFT: false,
    RIGHT: false,
    SPACE: false
};

export function initializeControls(){
    // Add event listeners for key events
    window.addEventListener('keydown', keyPressed);
    window.addEventListener('keyup', keyReleased);
}

function keyPressed(event) {
    if(event.key == 'w') keys.UP = true;
    if(event.key == 's') keys.DOWN = true;
    if(event.key == 'a') keys.LEFT = true;
    if(event.key == 'd') keys.RIGHT = true;
    sendKeyInput(keys);
}

function keyReleased(event) {
    if(event.key == 'w') keys.UP = false;
    if(event.key == 's') keys.DOWN = false;
    if(event.key == 'a') keys.LEFT = false;
    if(event.key == 'd') keys.RIGHT = false;
    sendKeyInput(keys);
}