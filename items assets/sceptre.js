let sprite;
let message = "";
let showRectangle = false;
let img;
let timeoutID;

function preload() {
  img = loadImage('sceptre.png');
}

function setup() {
  createCanvas(500, 500);
  sprite = new Sprite();
}

function draw() {
  background (255,0,0,0);
  sprite.update();
  sprite.display();
  if (showRectangle) {
    sprite.displayRectangle();
  }
}

class Sprite {
  constructor() {
    this.x = width - 220;
    this.y = 100;
    this.size = 100;
    this.angle = 0;
    this.amplitude = 10;
    this.frequency = 0.05;
  }

  update() {
    this.y = 200 + sin(this.angle) * this.amplitude;
    this.angle += this.frequency;
  }

  handleClick() {
    message = "Congratulations! You found the sceptre! Almost there.";
    showRectangle = true;
    clearTimeout(timeoutID); // Clear any existing timeout
    timeoutID = setTimeout(() => {
      message = "";
      showRectangle = false;
    }, 3000); // Hide the message after 3 seconds
  }

  display() {
    image(img, this.x, this.y, this.size, this.size);
  }

  displayRectangle() {
    const rectPadding = 10;
    const rectX = width / 2 - textWidth(message) / 2 - rectPadding;
    const rectY = height - 60 - rectPadding;
    const rectWidth = textWidth(message) + 2 * rectPadding;
    const rectHeight = 30 + 2 * rectPadding;

    fill(255);
    rect(rectX, rectY, rectWidth, rectHeight);
    fill(0);
    textSize(14);
    textAlign(CENTER, CENTER);
    text(message, width / 2, height - 45);
  }
}

function mousePressed() {
  if (isInsideSprite(mouseX, mouseY, sprite.x, sprite.y, sprite.size)) {
    sprite.handleClick();
  }
}

function isInsideSprite(px, py, x, y, size) {
  return px >= x && px <= x + size && py >= y && py <= y + size;
}