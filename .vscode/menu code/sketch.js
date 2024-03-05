var scene;


let menuBg;

// GENERIC BUTTON VARIABLES
let buttonY = 350;
let buttonCentre = 55; // distance from the edge to the centre of the button

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
let helpButtonX = 190;
let helpButtonDistance;
let inHelpButton = false;

// EXIT BUTTON VARIABLES
let exitText;
let exitButton; // ^ 
let exitButtonX = 340;
let exitButtonDistance;
let inExitButton = false;


function preload() {
    menuBg = loadImage("assets/menu.jpg");
    playButton = loadImage("assets/squareButton.png");
    buttonHighlight = loadImage("assets/buttonHighlight.png");
    playText = loadImage("assets/playButtonText.png");
    helpButton = loadImage("assets/squareButton.png");
    helpText = loadImage("assets/helpButtonText.png");
    exitButton = loadImage("assets/squareButton.png");
    exitText = loadImage("assets/exitButtonText.png");
}

function setup() {
    createCanvas(500, 500);
    scene = "menu";

}

function draw() {
    if (scene == "menu"){
        image(menuBg, 0, 0); //background

        // PLAY BUTTON
        

        image(playButton, playButtonX,buttonY, 450, 450);
        

        image(helpButton, helpButtonX, buttonY, 450, 450);


        image(exitButton, exitButtonX, buttonY, 450, 450);

    
        
        playButtonDistance = dist(playButtonX + buttonCentre, buttonY + buttonCentre, mouseX, mouseY); // calculate the distance between centre of button and the mouse
        if (playButtonDistance <= 50){ //might want to fine-tune distance value (default 60)
            inPlayButton = true;
            image(buttonHighlight, playButtonX, buttonY, 180, 135);
        
        }else {
            inPlayButton = false;
            
        }

        image(playText, playButtonX + 10, buttonY + 30, 90, 50);

        // HELP BUTTON


        

        image(helpText, helpButtonX + 10, buttonY + 30, 90, 50);
        // EXIT BUTTON

        image(exitText, exitButtonX + 10, buttonY + 30, 90, 50);
        
    }
}

function mouseClicked() { // when the mouse is clicked in the button
    if (inPlayButton){
        // whatever the button is going to do
    }else if (inHelpButton){
        // whatever the help button is going to do
    }else if (inExitButton){
        // whatever the exit button is going to do
    }
}

