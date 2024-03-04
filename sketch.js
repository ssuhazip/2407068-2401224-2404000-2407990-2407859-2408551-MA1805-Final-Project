let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 50;

let textures = [];
let graphicsMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let tileRules = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let characterImg;
let character;
let speed = 8;
let leftKeyPressed = false;
let rightKeyPressed = false;
let upKeyPressed = false;
let downKeyPressed = false;

function preload() {
    textures[0] = loadImage("path.png");
    textures[1] = loadImage("wall.png");
    characterImg = loadImage('player.png');
}

function setup() {
    createCanvas(500, 500);

    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize;
            let y = down * tileSize;
            let textureNum = graphicsMap[down][across];
            tilemap[across][down] = new Tile(textures[textureNum], x, y, tileSize, tileID);
            tileID++;
        }
    }
    character = new Character(width / 5, height / 5, 60); // Character's initial position and size
}

function draw() {
    background(0);

    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display();
            tilemap[across][down].debug();
        }
    }

    // Move character
    if (leftKeyPressed && character.x > 0) {
        character.x -= speed;
    }
    if (rightKeyPressed && character.x < width - character.size) {
        character.x += speed;
    }
    if (upKeyPressed && character.y > 0) {
        character.y -= speed;
    }
    if (downKeyPressed && character.y < height - character.size) {
        character.y += speed;
    }
    character.display();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        leftKeyPressed = true;
    } else if (keyCode === RIGHT_ARROW) {
        rightKeyPressed = true;
    } else if (keyCode === UP_ARROW) {
        upKeyPressed = true;
    } else if (keyCode === DOWN_ARROW) {
        downKeyPressed = true;
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        leftKeyPressed = false;
    } else if (keyCode === RIGHT_ARROW) {
        rightKeyPressed = false;
    } else if (keyCode === UP_ARROW) {
        upKeyPressed = false;
    } else if (keyCode === DOWN_ARROW) {
        downKeyPressed = false;
    }
}

class Tile {
    constructor(texture, x, y, tileSize, tileID) {
        this.texture = texture;
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }

    display() {
        noStroke();
        image(this.texture, this.x, this.y, this.tileSize);
    }

    debug() {
        stroke(245);
        noFill();
        rect(this.x, this.y, this.tileSize, this.tileSize);
        noStroke();
        fill(255);
        textAlign(LEFT, TOP);
        text(this.tileID, this.x, this.y);
    }
}

class Character {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    display() {
        image(characterImg, this.x, this.y, this.size, this.size);
    }
}
