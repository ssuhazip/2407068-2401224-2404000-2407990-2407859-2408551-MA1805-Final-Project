var scene; // "dungeon" or "hall" or "throneRoom"


// DIALOGUE VARIABLES
let inDialogue = false;
let dialogueBox;
let dialogueClick;
let font;
let character = 0;
let dialogueX = 50;
let dialogueY = 380;
let spacer = 30;
let knightDialogue = ["Who goes there?", "An intruder!", "Knights, seize him!"];
let kingDialogue = ["So it is you...", "BEGONE!!!"];
var dialogueNum = 0;

function preload() {
    font = loadFont("assets/font.ttf")
    dialogueBox = loadImage("assets/dialogueBox.png");
    dialogueClick = loadImage("assets/dialogueClick.png");
}

function setup() {
    createCanvas(500, 500);
    scene = "throneRoom";
}

function draw() {
    if(scene == "dungeon"){
        background(0);
        
        if (dialogueNum < knightDialogue.length) {
            dialogue(knightDialogue[dialogueNum]);
        }else if (dialogueNum == knightDialogue.length) {
            inDialogue = false;
        }
        
    }

    else if(scene == "hall"){
        background(255, 0, 0);
    }

    else if(scene == "throneRoom"){
        background(0, 0, 255);

        if (dialogueNum < kingDialogue.length) {
            dialogue(kingDialogue[dialogueNum]);
        }else if (dialogueNum == kingDialogue.length) {
            inDialogue = false;
        }
    }
}

function dialogue(string) { // shows the inputted string letter by letter inside the dialogue box.
    inDialogue = true
    image(dialogueBox, 0, 0);
    let substring = string.substring(0, character);

    fill(255);
    textFont(font);
    textSize(25);
    text(substring, dialogueX, dialogueY, width - spacer*2.5, height); // Ensures the text max width is within the dialogue box
  
    character += 0.3; // increases the current character at a slower speed.

    if (substring == string){ 
        image(dialogueClick, 0, 0);
    }
    

}

function mouseClicked(){
 if (inDialogue) {
    character = 0;
    dialogueNum++;
    dialogue(knightDialogue[dialogueNum])
 }
}