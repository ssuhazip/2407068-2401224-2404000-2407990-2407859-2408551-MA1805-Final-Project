//INITIALISE TITLE SCROLL VARIABLES
let img;
let scrollSpeed = 0.9;
let scrollPos;

let gameState = "start";
let startScreenImage; // Variable to hold the start screen image

//INITIALISE TILEMAP VARIABLES
let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 60;
//hello

let textures = [];
let graphicsMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, ]
];

let tileRules = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, ]
];

//INITIALISE PLAYER VARIABLES
let player;
let playerSprite;
let playerSpeed = 5;
let playerSize = tileSize;

//INITIALISE TEXT VARIABLES
let textContent = "Dear Rebels,\n\nAs we stand on the edge of history, poised to reshape the destiny of \n\nour kingdom, I write to you with a heart filled with determination and hope. \n\nThe time has come for us to seize control and usher in a new era of \n\nprosperity under our rightful leadership. To achieve this noble goal, we \n\nmust embark on a journey filled with challenges and trials.\n\n \n\nOur quest is clear: we must acquire the three sacred objects that will \n\nlegitimize our claim to the throne– the Sceptre, the Robe, and the \n\nCrown. These artifacts hold immense power and significance, symbols of \n\nthe authority we seek to wield. Yet, they are not easily obtained. Each is \n\nguarded by formidable obstacles, designed to test our resolve and \n\nworthiness.\n\n \n\nThe Sceptre, a symbol of sovereignty and strength, lies hidden within the \n\ndepths of the deep, dark dungeons of the formidable fortress, protected \n\nby ancient traps and guardians.\n\n \n\nWhilst The Robe, imbued with the wisdom and guidance of our ancestors, \n\nis held a floor above the dungeons, within the main hall. To claim it, we \n\nmust navigate the treacherous maze of the winding corridors of the \n\nfortress, overcoming its barriers and outwitting its elusive protectors.\n\n \n\nFinally, the Crown, the ultimate symbol of royal authority, is safeguarded \n\nwithin the daunting throne room. Protected by the loyal forces of the \n\ncurrent regime, breaching its walls will demand courage, strategy, and \n\nsacrifice.\n\n \n\nKnow that the path ahead will be perilous, and the challenges we face \n\nwill test the very limits of our strength and determination. But as we set \n\nforth on this journey, let us stand united in purpose. Together, we shall \n\ndefy the odds, defy our oppressors, and carve our names into the annals \n\nof history as liberators and kings.\n\n \n\nIgor, Leader of the Rebellion"; // Your text content here

let customFont;
let backgroundImage;

function preload() {
    //textures for the graphicsMap
    textures[0] = loadImage("path.png");
    textures[1] = loadImage("wall.png");

    //player sprite
    playerSprite = loadImage("player.png");

    // Image for the start screen
    startScreenImage = loadImage("intro screen.png");

    // Custom font
    customFont = loadFont('MinecraftRegular-Bmg3.otf');

    // Background image for the text content
    backgroundImage = loadImage('Scroll Screen Background.png');
}

function setup() {
    createCanvas(600, 600);
    textSize(16);

    // Set the custom font
    textFont(customFont);

    // Set initial scroll position to the height of the canvas
    scrollPos = height;

    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let textureNum = graphicsMap[down][across];
            tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID);
            tileID++;
        }
    }
    player = new Player(playerSprite, 3, 4, tileSize, playerSpeed, tileSize, tileRules);
}

function draw() {
    //starter page code
    if (gameState === "start") {
        drawStartPage();
    } else if (gameState === "text") {
        drawTextContent();
    } else if (gameState === "play") {
        drawGame();
    }
}

function keyPressed() {
    if (keyCode === 32) { // Space bar
        if (gameState === "start") {
            gameState = "text"; // Transition to text state
        } else if (gameState === "text") {
            gameState = "play"; // Transition to play state after text finishes scrolling
        } else if (gameState === "play") {
            player.setDirection(); 
        }
    }
    player.setDirection(); //allows the player to move across the tiles
}

function drawStartPage() {
    // Draw the background image for the start screen
    image(startScreenImage, 0, 0, width, height);

    // Set text properties
    textSize(32); // Set text size to 32 for the intro screen
    textAlign(CENTER);
    fill(255);
    textFont(customFont);

    // Draw the welcome message
    text("Welcome to Reign of Rebels!", width / 2, height / 2 - 20);

    // Draw the instruction to start the game
    text("Press SPACEBAR to start", width / 2, height / 2 + 20);
}

function drawTextContent() {
    // Draw the background image for the text content
    image(backgroundImage, 0, 0, width, height);

    // Set text properties
    textSize(15); // Set text size to 16 for the text content
    fill(255);
    textFont(customFont);

    // Calculate the height of the text content
    let textHeight = textContent.split('\n').length * textSize();

    // Calculate the y-position for the text to be centered vertically
    let yPos = height / 2 - textHeight / 2 + scrollPos;

    // Draw the text at the calculated position
    text(textContent, 300, yPos);

    // Update scroll position
    scrollPos -= scrollSpeed;

    // Reset scroll position when it exceeds the total height of the text content
    if (scrollPos < -textHeight) {
        gameState = "play"; // Transition to play state after text finishes scrolling
    }
}


function drawGame() {
    background(0);
//draws the first level/stage of the game
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display();
            tilemap[across][down].debug();
        }
    }
    player.display();
    player.move();
}

class Tile {
    constructor(texture, across, down, tileSize, tileID) {
        this.texture = texture;
        this.across = across;
        this.down = down;
        this.xPos = across * tileSize;
        this.yPos = down * tileSize;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }

    display() {
        noStroke();
        image(this.texture, this.xPos, this.yPos, this.tileSize);
    }

    debug() {
        //TILE
        stroke(245);
        noFill();
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize);

        //LABEL
        noStroke();
        fill(255);
        textAlign(LEFT, TOP);

        text(this.tileID, this.xPos, this.yPos);
    }

}

class Player {
    constructor(sprite, startAcross, startDown, size, speed, tileSize, tileRules) {
        this.sprite = sprite;
        this.across = startAcross;
        this.down = startDown;
        this.size = size;
        this.speed = speed;
        this.tileSize = tileSize;
        this.tileRules = tileRules;
        this.xPos = this.across * tileSize;
        this.yPos = this.down * tileSize;

        this.dirX = 0;
        this.dirY = 0;

        this.isMoving = false;

        this.tx = this.xPos;
        this.ty = this.yPos;

    }
    setDirection() {
        if (!this.isMoving) {
            //UP
            if (key === "w") {
                this.dirX = 0;
                this.dirY = -1; //up
            }
            //DOWN
            if (key === "s") {
                this.dirX = 0;
                this.dirY = 1; //down
            }
            //LEFT
            if (key === "a") {
                this.dirX = -1; //left
                this.dirY = 0;
            }
            //RIGHT
            if (key === "d") {
                this.dirX = 1; //right 
                this.dirY = 0;
            }

            this.checkTargetTile();
        }
    }

    checkTargetTile() {
        this.across = Math.floor(this.xPos / this.tileSize);
        this.down = Math.floor(this.yPos / this.tileSize);

        let nextTileHorizontal = this.across + this.dirX;
        let nextTileVertical = this.down + this.dirY;

        if (
            nextTileHorizontal >= 0 && //top of map
            nextTileHorizontal < numAcross &&
            nextTileVertical >= 0 &&
            nextTileVertical < numDown
        ) {

            if (this.tileRules[nextTileVertical][nextTileHorizontal] != 1) {
                this.tx = nextTileHorizontal * tileSize;
                this.ty = nextTileVertical * tileSize;

                this.isMoving = true;
            }
        }
    }

    move() {
        if (this.isMoving) {
            this.xPos += this.speed * this.dirX;
            this.yPos += this.speed * this.dirY;

            if (this.xPos === this.tx && this.yPos === this.ty) {
                this.isMoving = false;
                this.dirX = 0;
                this.dirY = 0;
            }
        }

    }

    display() {
        imageMode(CORNER);
        image(this.sprite, this.xPos, this.yPos, this.size, this.size);
    }
}
