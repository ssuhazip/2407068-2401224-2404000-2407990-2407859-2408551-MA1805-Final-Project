//TILEMAP VARIABLES HERE
let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 50;

let textures = [];
let graphicsMap = [
    //X coordinate values
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   //Y coordinate values
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


//ITEM VARIABLES GO HERE


//ENEMIES VARIABLES GO HERE


//PLAYER VARIABLES GO HERE

function preload() {
    //IMAGES FOR MAP AND CHARACTERS GO HERE
    //ALL IMAGES PLEASE PUT IN THE ASSETS FOLDER
}

function setup() {
    createCanvas (windowWidth, windowHeight);

    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down , numDown; down++) {
            let x = across * tileSize;
            let y = down * tileSize;
            let textureNum;
            textureNum = graphicsMap[down][across];
            tilemap[across][down] = new Tile (textures[textureNum], x, y, tileSize, tileID);
            tileID++;
        }

    }


    //console.log IN CASE YOU NEED TO SEE WHAT THE CODE IS DOING/ WHAT IT WILL SHOW
}

function draw() {
    background(0);

    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display();
            tilemap[across][down].debug();
        }
    }

    //for loop tilemap texture graphics

    //for loop enemies or items
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
        image (this.texture, this.x, this.y, this.tileSize);
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

class Enemies {
    //code
}

class Item {
    //code
}

class Player {
    //code
}