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

let textures = [];
let graphicsMap = [
    [16, 17, 39, 17, 33, 34, 17, 17, 17, 18, ],
    [19, 20, 40, 20, 35, 36, 20, 20, 20, 21, ],
    [31, 0, 1, 2, 2, 2, 2, 3, 37, 30, ],
    [31, 37, 0, 0, 0, 0, 0, 0, 7, 23, ],
    [32, 42, 0, 0, 0, 0, 0, 2, 41, 23, ],
    [22, 4, 0, 0, 0, 42, 42, 0, 7, 30, ],
    [22, 4, 0, 0, 0, 0, 41, 0, 11, 23, ],
    [31, 37, 0, 0, 0, 0, 0, 0, 7, 23, ],
    [31, 12, 42, 41, 0, 0, 0, 0, 41, 30, ],
    [22, 4, 0, 0, 0, 0, 0, 0, 7, 30, ],
    [22, 4, 0, 0, 0, 0, 0, 0, 11, 23, ],
    [22, 4, 0, 0, 0, 0, 0, 0, 7, 23, ],
    [22, 12, 0, 0, 0, 0, 0, 0, 15, 23, ],
    [24, 25, 25, 25, 28, 29, 26, 26, 26, 27, ]
    
]

let tileRules = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, ],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, ]
]

//INITIALISE PLAYER VARIABLES
let player;
let playerSprite;
let playerSpeed = 5;
let playerSize = tileSize;

let goblins = [];
let goblinSize = 30;
let numGoblins = 2;
let lastSpriteChangeTime = 0;
const spriteChangeInterval = 190;

//sprite variables
let goblinSprite;
let goblinSprite1;
let goblinSprite2;

//INITIALISE TEXT VARIABLES
let textContent = "Dear Rebels,\n\nAs we stand on the edge of history, poised to reshape the destiny of \n\nour kingdom, I write to you with a heart filled with determination and hope. \n\nThe time has come for us to seize control and usher in a new era of \n\nprosperity under our rightful leadership. To achieve this noble goal, we \n\nmust embark on a journey filled with challenges and trials.\n\n \n\nOur quest is clear: we must acquire the three sacred objects that will \n\nlegitimize our claim to the throne– the Sceptre, the Robe, and the \n\nCrown. These artifacts hold immense power and significance, symbols of \n\nthe authority we seek to wield. Yet, they are not easily obtained. Each is \n\nguarded by formidable obstacles, designed to test our resolve and \n\nworthiness.\n\n \n\nThe Sceptre, a symbol of sovereignty and strength, lies hidden within the \n\ndepths of the deep, dark dungeons of the formidable fortress, protected \n\nby ancient traps and guardians.\n\n \n\nWhilst The Robe, imbued with the wisdom and guidance of our ancestors, \n\nis held a floor above the dungeons, within the main hall. To claim it, we \n\nmust navigate the treacherous maze of the winding corridors of the \n\nfortress, overcoming its barriers and outwitting its elusive protectors.\n\n \n\nFinally, the Crown, the ultimate symbol of royal authority, is safeguarded \n\nwithin the daunting throne room. Protected by the loyal forces of the \n\ncurrent regime, breaching its walls will demand courage, strategy, and \n\nsacrifice.\n\n \n\nKnow that the path ahead will be perilous, and the challenges we face \n\nwill test the very limits of our strength and determination. But as we set \n\nforth on this journey, let us stand united in purpose. Together, we shall \n\ndefy the odds, defy our oppressors, and carve our names into the annals \n\nof history as liberators and kings.\n\n \n\nIgor, Leader of the Rebellion"; // Your text content here

let customFont;
let backgroundImage;

let daggerImage; // Variable to hold the dagger image

let daggerVisible = false; // Boolean variable to track 

///INITIALISE BUTTON VARIABLES
let menuBg;
let Title;

// GENERIC BUTTON VARIABLES
let buttonY = 420;
let buttonCentre = 55; // distance from the edge to the centre of the button
let buttonSizeX = 575;
let buttonSizeY = 575;


// PLAY BUTTON VARIABLES
let playText;
let playButton;
let buttonHighlight;
let playButtonX = 40; 
let playButtonDistance; 
let inPlayButton = false; 

// HELP BUTTON VARIABLES
let helpText;
let helpButton; // use same logic for these buttons but diff X and Y
let helpButtonX = 230;
let helpButtonDistance;
let inHelpButton = false;

// EXIT BUTTON VARIABLES
let exitText;
let exitButton; // ^ 
let exitButtonX = 420;
let exitButtonDistance;
let inExitButton = false;


function preload() {

    textures[0] = loadImage("assets/path/path_1a.png");
    textures[1] = loadImage("assets/path/path_1b.png");
    textures[2] = loadImage("assets/path/path_1c.png");
    textures[3] = loadImage("assets/path/path_1d.png");

    textures[4] = loadImage("assets/path/path_2a.png");
    textures[5] = loadImage("assets/path/path_2b.png");
    textures[6] = loadImage("assets/path/path_2c.png");
    textures[7] = loadImage("assets/path/path_2d.png");

    textures[8] = loadImage("assets/path/path_3a.png");
    textures[9] = loadImage("assets/path/path_3b.png");
    textures[10] = loadImage("assets/path/path_3c.png");
    textures[11] = loadImage("assets/path/path_3d.png");

    textures[12] = loadImage("assets/path/path_4a.png");
    textures[13] = loadImage("assets/path/path_4b.png");
    textures[14] = loadImage("assets/path/path_4c.png");
    textures[15] = loadImage("assets/path/path_4d.png");


    textures[16] = loadImage("assets/wall/wall_1a.png");
    textures[17] = loadImage("assets/wall/wall_1b.png");
    textures[18] = loadImage("assets/wall/wall_1c.png");
    textures[19] = loadImage("assets/wall/wall_2a.png");
    textures[20] = loadImage("assets/wall/wall_2b.png");
    textures[21] = loadImage("assets/wall/wall_2c.png");
    textures[22] = loadImage("assets/wall/wall_3a.png");
    textures[23] = loadImage("assets/wall/wall_3c.png");
    textures[24] = loadImage("assets/wall/wall_4a.png");
    textures[25] = loadImage("assets/wall/wall_4b.png");
    textures[26] = loadImage("assets/wall/wall_4c.png");
    textures[27] = loadImage("assets/wall/wall_4d.png");
    textures[28] = loadImage("assets/wall/wall_5a.png");
    textures[29] = loadImage("assets/wall/wall_5b.png");

    textures[30] = loadImage("assets/wall/wall_3c_barrel.png");
    textures[31] = loadImage("assets/wall/wall_3a_barrel.png");
    textures[32] = loadImage("assets/wall/wall_3a_skull.png");
    textures[33] = loadImage("assets/wall/wall_door_1a.png");
    textures[34] = loadImage("assets/wall/wall_door_1b.png");
    textures[35] = loadImage("assets/wall/wall_door_2a.png");
    textures[36] = loadImage("assets/wall/wall_door_2b.png");
    textures[37] = loadImage("assets/path/path_barrel.png");
    textures[38] = loadImage("assets/path/path_skull.png");
    

    textures[39] = loadImage("assets/wall/wall_1b_banner.png");
    textures[40] = loadImage("assets/wall/wall_2b_banner.png");
    textures[41] = loadImage("assets/path/path_skull_bones.png");
    textures[42] = loadImage("assets/path/path_bones.png");

    //player sprite
    playerSprite = loadImage("player.png");

     // Image for the start screen
     startScreenImage = loadImage("intro screen.png");

     // Custom font
     customFont = loadFont('MinecraftRegular-Bmg3.otf');
 
     // Background image for the text content
     backgroundImage = loadImage('Scroll Screen Background.png');
     
     // Title screen
     Title = loadImage("assets/Title.png");
    playButton = loadImage("assets/squareButton.png");
    buttonHighlight = loadImage("assets/buttonHighlightGreen.png");
    playText = loadImage("assets/playButtonText.png");
    helpButton = loadImage("assets/squareButton.png");
    helpText = loadImage("assets/helpButtonText.png");
    exitButton = loadImage("assets/squareButton.png");
    exitText = loadImage("assets/exitButtonText.png");
 
     // Load dagger image
     daggerImage = loadImage('dagger.png');

     //goblin Sprites
    goblinSprite1 = loadImage("goblin images/goblin1.png");
    goblinSprite2 = loadImage("goblin images/goblin3.png");
    
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
           
            let textureNum;
           textureNum = graphicsMap[down][across];
           tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID);

            tileID++;
        }
        player = new Player(playerSprite, 3, 4, tileSize, playerSpeed, tileSize, tileRules);

    }

    
    for (let enemyCount = 0; enemyCount < numGoblins; enemyCount++) {
        goblins[enemyCount] = new Goblin(goblinSprite1,
                                        random(0, width),
                                        random(0, height),
                                        goblinSize, tileRules)
    }
    
}

function draw() {
    background(0);

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

    if (millis() - lastSpriteChangeTime > spriteChangeInterval) {
        for (let enemyCount = 0; enemyCount < numGoblins; enemyCount++) {
            goblins[enemyCount].switchSprite();
        }
        lastSpriteChangeTime = millis();
    }

   
    for (let enemyCount = 0; enemyCount < numGoblins; enemyCount++) {
        goblins[enemyCount].display();
    }
    player.setDirection();
}   

function mouseClicked() {
    // Check if the mouse is clicked on the canvas
    if (gameState === "play" && mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        // Toggle the visibility of the dagger
        daggerVisible = !daggerVisible;
    }

    if (gameState === "start") {
        if(inPlayButton){
            gameState = "text"; // Transition to text state
        } 


        } else if (gameState === "text") {
            gameState = "play"; // Transition to play state after text finishes scrolling
        } else if (gameState === "play") {
            
        }
}

function drawStartPage() {
    // Draw the background image for the start screen
    image(startScreenImage, 0, 0, width, height);

    // Set text properties
    image(Title, 70, 20, 500, 200);
        // PLAY BUTTON
        image(playButton, playButtonX,buttonY, buttonSizeX, buttonSizeY);
        image(helpButton, helpButtonX, buttonY, buttonSizeX, buttonSizeY);
        image(exitButton, exitButtonX, buttonY, buttonSizeX, buttonSizeY);
    
        playButtonDistance = dist(playButtonX + buttonCentre, buttonY + buttonCentre, mouseX, mouseY); // calculate the distance between centre of button and the mouse
        if (playButtonDistance <= 50){ //might want to fine-tune distance value (default 60)
            inPlayButton = true;
            image(buttonHighlight, playButtonX, buttonY, buttonSizeX, buttonSizeY);
        
        }else {
            inPlayButton = false;
        }
        image(playText, playButtonX + 25, buttonY + 40, 90, 50);

        // HELP BUTTON
        helpButtonDistance = dist(helpButtonX + buttonCentre, buttonY + buttonCentre, mouseX, mouseY); // calculate the distance between centre of button and the mouse
        if (helpButtonDistance <= 50){ //might want to fine-tune distance value (default 60)
            inHelpButton = true;
            image(buttonHighlight, helpButtonX, buttonY, buttonSizeX, buttonSizeY);
        }
        
        exitButtonDistance = dist(exitButtonX + buttonCentre, buttonY + buttonCentre, mouseX, mouseY); // calculate the distance between centre of button and the mouse
        if (exitButtonDistance <= 50){ //might want to fine-tune distance value (default 60)
            inExitButton = true;
            image(buttonHighlight, exitButtonX, buttonY, buttonSizeX, buttonSizeY);

        }
        image(helpText, helpButtonX + 25, buttonY + 40, 90, 50);
        // EXIT BUTTON
        image(exitText, exitButtonX + 25, buttonY + 40, 90, 50);
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
    text(textContent, 30, yPos); //XPos, YPos

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

    // Draw dagger if it's visible
    if (daggerVisible) {
        // Draw the dagger at the player's position
        image(daggerImage, player.xPos, player.yPos, player.size, player.size);
    }

    for (let enemyCount = 0; enemyCount < numGoblins; enemyCount++) {
        goblins[enemyCount].display();
}
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

   debug() {}
   //use debug or console.log to check code 
 
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
            if(key === "w") {
                this.dirX = 0;
                this.dirY = -1;
            }
            //DOWN
            if(key === "s") {
                this.dirX = 0;
                this.dirY = 1;
            }
            //LEFT
            if(key === "a") {
                this.dirX = -1;
                this.dirY = 0;
            }
            //RIGHT
            if(key === "d") {
                this.dirX = 1;
                this.dirY = 0;
            }

            this.checkTargetTile();    
        }
    } 

    checkTargetTile() {
        this.across = Math.floor(this.xPos / this.tileSize);
        this.down = Math.floor(this.yPos / this.tileSize);

        let nextTileHorizontal = this.across + this.dirX;
        let nextTileVertical = this.down +this.dirY;

        if (
            nextTileHorizontal >= 0 && //top of map
            nextTileHorizontal < numAcross &&
            nextTileVertical >= 0 &&
            nextTileVertical < numDown 
           ) {

            if(this.tileRules[nextTileVertical][nextTileHorizontal] !=1) {
                this.tx = nextTileHorizontal * tileSize;
                this.ty = nextTileVertical * tileSize;

                this.isMoving = true;
            }
        }
    }

    move() {
        if(this.isMoving) {
            this.xPos += this.speed * this.dirX;
            this.yPos += this.speed * this.dirY;

            if(this.xPos === this.tx && this.yPos === this.ty) {
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

class Goblin {
    constructor(sprite, x, y, size, speed) {
        this.sprite = sprite;
        this.sprites = [goblinSprite1, goblinSprite2];
        this.currentSpriteIndex = 0;
        this.x = x;
        this.y = y;
        this.targetX = 8;
		this.targetY = 8;
        this.size = 100, 100;
        this.speed = 0.8
        this.direction = 'right';
        this.player = player;
    }

    display() {
        if (this.direction === 'left') {
            // Flip horizontally
            scale(-1, 1);
            image(this.sprite, -this.x - this.size, this.y, this.size, this.size);
            scale(-1, 1); // Reset scale
        } else {
            image(this.sprite, this.x, this.y, this.size, this.size);
        }
        this.update();
    
}


       update() {
        let dx = this.player.xPos - this.x;
        let dy = this.player.yPos - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        // Normalize the direction vector
        dx /= distance;
        dy /= distance;

        // Move the goblin towards the player
        this.x += dx * this.speed;
        this.y += dy * this.speed;

        // Update direction based on movement
        if (dx > 0) {
            this.direction = 'right';
        } else {
            this.direction = 'left';
        }
    }

    switchSprite() {
        this.currentSpriteIndex = (this.currentSpriteIndex + 1) % this.sprites.length;
        this.sprite = this.sprites[this.currentSpriteIndex];
    }
}
