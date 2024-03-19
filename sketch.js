let tilemap = [];
let tileSize = 50;
let textures = [];
let currentLevel = dungeonObject;

const dungeonObject = {
    numAcross: 10,
    numDown: 10,

    //TEXTURE VALUES:
    //0: grassy; 1: stone; 2: wall; 3: door

    graphicMap: [ 
    //      THIS IS OUR Y AXIS
    //   0  1  2  3  4  5  6  7  8  9 
        [0, 0, 0, 0, 0, 0, 0, 2, 3, 2], // 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 1
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // 4    THIS IS OUR X AXIS
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 6
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // 7
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 1]  // 9
    ],

    tileRules: [ 
    //         THIS IS OUR Y AXIS
    //   0  1  2  3  4  5  6  7  8  9 
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1], // 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // 4    THIS IS OUR X AXIS
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 6
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // 7
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 1]  // 9
    ]
}

const mainHallObject = {
    numAcross: 5,
    numDown: 10,

    //TEXTURE VALUES
    //0: void; 1: wall; 2: door;

    graphicMap: [
    //   0  1  2  3  4
        [1, 1, 2, 1, 1], // 0
        [1, 0, 0, 0, 1], // 1
        [1, 0, 0, 0, 1], // 2 
        [1, 0, 0, 0, 1], // 3
        [1, 0, 0, 0, 1], // 4
        [1, 0, 0, 0, 1], // 5
        [1, 0, 0, 0, 1], // 6
        [1, 0, 0, 0, 1], // 7
        [1, 0, 0, 0, 1], // 8
        [1, 1, 2, 1, 1]  // 9
    ],

    tileRules: [
    //   0  1  2  3  4
        [1, 1, 1, 1, 1], // 0
        [1, 0, 0, 0, 1], // 1
        [1, 0, 0, 0, 1], // 2 
        [1, 0, 0, 0, 1], // 3
        [1, 0, 0, 0, 1], // 4
        [1, 0, 0, 0, 1], // 5
        [1, 0, 0, 0, 1], // 6
        [1, 0, 0, 0, 1], // 7
        [1, 0, 0, 0, 1], // 8
        [1, 1, 1, 1, 1]  // 9
    ],
}

const thrownRoomObject = {
    numAcross: 10,
    numDown: 10,

    //TEXTURE VALUES:
    //0: void; 1: wall; 2: door;

    graphicMap: [ 
    //      THIS IS OUR Y AXIS
    //   0  1  2  3  4  5  6  7  8  9 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 1
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1], // 2
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 3
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1], // 4    THIS IS OUR X AXIS
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 5
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 6
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], // 7
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 8
        [1, 1, 2, 1, 1, 1, 1, 1, 1, 1]  // 9
    ],

    tileRules: [ 
        //      THIS IS OUR Y AXIS
    //   0  1  2  3  4  5  6  7  8  9 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 1
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1], // 2
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 3
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1], // 4    THIS IS OUR X AXIS
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 5
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 6
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], // 7
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 8
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  // 9
    ]
}

let levels = {
    dungeon: dungeonObject,
    mainHall: mainHallObject,
    thrownRoom: thrownRoomObject,
}

let transitionEntranceToCorridor = {
    linkedLevel: levels.corridor,
    startingXPos: 2 * tileSize,
    startingYPos: 8 * tileSize
}

let transitionCorridorToEntrance = {
    linkedLevel: levels.entrance,
    startingXPos: 8 * tileSize,
    startingYPos: 1 * tileSize
}

let transitionCorridorToMainHall = {
    linkedLevel: levels.mainHall,
    startingXPos: 2 * tileSize,
    startingYPos: 8 * tileSize
}

let transitionMainHallToCorridor = {
    linkedLevel: levels.corridor,
    startingXPos: 2 * tileSize,
    startingYPos: 1 * tileSize
}

function preload() {
    textures[0] = loadImage("assets/path.png");
    textures[1] = loadImage("assets/wall.png");
}

function setup() {
    createCanvas(500, 500);
    loadLevel(currentLevel);

    createTileMap();

}


function draw() {
    background(0);

    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display();
            tilemap[across][down].debug();
        }
    }
    
}


function loadLevel(levelToLoad) {
    currentLevel = levelToLoad;
    tilemap = []; // we need to wip our tilemap in case
    numAcross = levelToLoad.numAcross;
    numDown = levelToLoad.numDown;
    graphicMap = levelToLoad.graphicMap;
    tileRules = levelToLoad.tileRules;
    textures = levelToLoad.textures;
}

function createTileMap() {
    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize;
            let y = down * tileSize;
            let textureNum;
            textureNum = graphicsMap[down][across];
            console.log("My tileID is", tileID, "and my texture number is", textureNum);
            tilemap[across][down] = new Tile(textures[textureNum], x, y, tileSize, tileID);

            tileID++;
        }
        console.log(graphicsMap[1][8]);
    }

    addTransitionsToTiles();
}

function addTransitionsToTiles() {
    if (currentLevel === entranceObject) {
        currentLevel.tileRules[0][8] = transitionEntranceToCorridor;
    }

    if (currentLevel === corridorObject) {
        currentLevel.tileRules[9][2] = transitionCorridorToEntrance;
        currentLevel.tileRules[0][2] = transitionCorridorToMainHall;
    }

    if (currentLevel === mainHallObject) {
        currentLevel.tileRules[9][2] = transitionMainHallToCorridor;
    }
}

function keyPressed() {
    if (key === 'l') {
        loadLevel(corridorObject);
        createTileMap();
    }
    
    player.setDirection();
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
        //TILE
        stroke(245);
        noFill();
        rect(this.x, this.y, this.tileSize, this.tileSize);

        //LABEL
        noStroke();
        fill(255);
        textAlign(LEFT, TOP);
        
        text(this.tileID, this.x, this.y);
    }
 
}
