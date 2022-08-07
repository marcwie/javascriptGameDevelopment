let playerState = 'idle'
let dropdown = document.getElementById('animations');
dropdown.addEventListener('change', (e) => {
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 600;

const spriteWidth = 575;
const spriteHeight = 523;

let currentFrame = 0;  // A counter for the number of frames
const staggerFrame = 5;  // Update image every staggerFrame frames. Larger values mean slower animation

const playerImage = new Image();
playerImage.src = 'img/shadow_dog.png'

const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    },
]

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j=0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({'x': positionX, 'y': positionY})
    }
    spriteAnimations[state.name] = frames;
})

function animate(){
    
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    let position = Math.floor(currentFrame / staggerFrame) % spriteAnimations[playerState].loc.length
    let frameX = spriteAnimations[playerState].loc[position].x
    let frameY = spriteAnimations[playerState].loc[position].y
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    currentFrame++;
    requestAnimationFrame(animate);
}

animate();