// FPS DISPLAY CODE
var lastTime = 0;
var frameCount = 0;
var fpsDisplay = "";

export function updateFPS(timestamp){
    const elapsedTime = timestamp - lastTime;
    lastTime = timestamp;
    const fps = 1000 / elapsedTime;
    fpsDisplay = `CLIENT FPS: ${Math.round(fps)}`;
}

export function getFPSstring(){
    return fpsDisplay;
}