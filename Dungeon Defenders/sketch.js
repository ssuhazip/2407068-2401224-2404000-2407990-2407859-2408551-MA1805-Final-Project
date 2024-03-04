//TILEMAP VARIABLES HERE
let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 50;

let textures = [];
let graphicsMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
    
]


//ITEM VARIABLES GO HERE


//ENEMIES VARIABLES GO HERE


//PLAYER VARIABLES GO HERE
let characterImg;
let character;
let speed = 8; 
let leftKeyPressed = false;
let rightKeyPressed = false;
let upKeyPressed = false;
let downKeyPressed = false;

function preload() {
    //IMAGES FOR MAP AND CHARACTERS GO HERE
    //ALL IMAGES PLEASE PUT IN THE ASSETS FOLDER
    characterImg = loadImage('player.png');
}

function setup() {
HEAD
    //createCanvas (500, 500)
    createCanvas(600, 600);
    character = new Character(width / 5, height / 5, 60); // Character's initial position and size
    //console.log IN CASE YOU NEED TO SEE WHAT THE CODE IS DOING/ WHAT IT WILL SHOW
}

function draw() {
    //background 
    background(220);

    createCanvas(500, 500);

    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize;
            let y = down * tileSize;
            let textureNum;
           textureNum = graphicsMap[down][across];
            tilemap[across][down] = new Tile(textures[textureNum], x, y, tileSize, tileID);

            tileID++;
        }
        console.log(graphicsMap[1][8])
    }

}

function draw() {
    background(0);

    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display();
            tilemap[across][down].debug();
        }
    }

b2db79e2001d4e830ce24386e51155a4e9c33c62
    //for loop tilemap texture graphics
    //for loop enemies or items]
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
class Enemies {
    //code
}

class Item {
    //code
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