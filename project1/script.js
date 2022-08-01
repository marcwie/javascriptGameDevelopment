const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 600;

const spriteWidth = 575;
const spriteHeight = 523;

// A counter for the number of frames
let currentFrame = 0;

// Update image every staggerFrame frames. Larger values mean slower animation
const staggerFrame = 5;

// Select which animation to show
let frameY = 4;

const playerImage = new Image();
playerImage.src = 'img/shadow_dog.png'

// Maximum number of frames per animation
const maxFrameX = [6, 6, 6, 8, 10, 4, 6, 6, 11, 3]

function animate(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    let position = Math.floor(currentFrame / staggerFrame) % maxFrameX[frameY]
    let frameX = spriteWidth * position
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    currentFrame++;
    requestAnimationFrame(animate);
}

animate();