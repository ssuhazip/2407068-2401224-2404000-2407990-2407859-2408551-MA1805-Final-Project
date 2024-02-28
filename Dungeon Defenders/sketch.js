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
           
            tilemap[across][down] = new Tile (x, y, tileSize, tileID);
            tileID++;
        }

    }


    //console.log IN CASE YOU NEED TO SEE WHAT THE CODE IS DOING/ WHAT IT WILL SHOW
}

function draw() {
    background(0);

    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].debug();
        }
    }

    //for loop tilemap texture graphics

    //for loop enemies or items
}

class Tile {
    constructor(x, y, tileSize, tileID) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }

    debug() {
        //TILE
        stroke(245);
        fill(55);
        rect(this.x, this.y, this.tileSize, this.tileSize);
        
        //CONVERT SINGLE DIGIT NUMBERS TO TWO-DIGIT NUMBERS
        //Convert all one-digit tileIDs to two-digit (i.e. 0 becomes 00, 1 becomes 01, 2 becomes 01 etc.).
        //This is so the first digit is the X axis and the second digit is the Y axis.
        let twoDigitTileID;
        if (this.tileID < 10) {
            twoDigitTileID = "0" + this.tileID;
        } else {
            twoDigitTileID = this.tileID;
        }

        //LABEL
        noStroke();
        fill(245);
        textAlign(LEFT, TOP);
        text(twoDigitTileID, this.x, this.y);
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