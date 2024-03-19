let scrollSpeed = 0.9; // Adjust scroll speed as needed
let scrollPos = 0;
let textContent = "Dear Rebels,\n\nI write to you today with a heart brimming with pride and gratitude, \n\nfor together, we have achieved the impossible. Our journey, fraught \n\nwith peril and uncertainty, has culminated in a victory that will echo \n\nthrough the annals of history – the overthrow of the tyrant king and \n\nthe dawn of a new era for our kingdom.\n\n\nWith unwavering courage and unwavering determination, we embarked on \n\na quest to reclaim our rightful place on the throne. Through the \n\ntreacherous depths of the Dungeons, the grandeur of the Main Hall, \n\nand the sanctity of the Throne Room, we faced challenges that tested our \n\nresolve and strength. Yet, with unity as our shield and justice as \n\nour sword, we emerged triumphant. \n\n\nAnd now, as I stand before you, I am filled with awe and reverence for \n\nthe courage and sacrifice each of you has displayed. Together, we have \n\nvanquished the darkness that gripped our land, casting aside the shackles \n\nof oppression and ushering in a new era of freedom and prosperity. \n\n\nTogether, we shall build a kingdom where justice reigns supreme, where \n\nevery voice is heard, and where freedom flourishes. And as we \n\nmarch forward into the future, let us never forget the journey \n\nthat brought us here – a journey of courage, sacrifice, and unwavering \n\ndetermination. \n\n\nWith deepest admiration and eternal gratitude, \n\nIgor, Leader of the Rebellion."; 

let customFont;
let backgroundImage;
let popupImage;
let scrolledToEnd = false;
let textFullyScrolled = false;

function preload() {
  // Load the custom font
  customFont = loadFont('MinecraftRegular-Bmg3.otf');
  // Load the background image
  backgroundImage = loadImage('throne room.png');
  // Load the popup image
  popupImage = loadImage('You Won!.png');
}

function setup() {
  createCanvas(700, 700);
  textSize(16);

  // Set the custom font
  textFont(customFont);

  // Calculate the total height of the text content
  let textHeight = textAscent() + textDescent() + textLeading();
  let fullTextHeight = textContent.split('\n').length * textHeight;

  // Set the initial scroll position to show the full text at the bottom
  scrollPos = fullTextHeight - height;
}

function draw() {
  // Draw the background image
  image(backgroundImage, 0, 0, width, height);

  // Draw the text at the current scroll position
  let yPos = -scrollPos;
  fill(255);
  text(textContent, 50, yPos);

  // Update scroll position
  scrollPos += scrollSpeed;

  // Check if all text is scrolled off the screen
  if (scrollPos >= 0 && !textFullyScrolled) {
    textFullyScrolled = true;
  }

  // If all text is scrolled off the screen, display the popup image
  if (textFullyScrolled) {
    image(popupImage, 0, 0, width, height);
  }

  // Reset scroll position when it exceeds the total height of the text content
  if (scrollPos > textContent.split('\n').length * textSize()) {
    scrollPos = -height;
    textFullyScrolled = false; // Reset the textFullyScrolled flag
  }
}
