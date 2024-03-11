let sprite;
let message = "";
let showRectangle = false;
let img;

function preload() {
  // 
  img = loadImage('crown.png');
}

function setup() {
  createCanvas(500, 500);
  sprite = new Sprite();
}

function draw() {
  background(0);
  sprite.update();
  sprite.display();
  if (showRectangle) {
    sprite.displayRectangle();
  }
}

class Sprite {
  constructor() {
    this.x = width -200;
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
    message = "Unbelievable! you have managed to find the mighty Crown!";
    showRectangle = true;
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
  if (isInsideTriangle(mouseX, mouseY, sprite.x, sprite.y, sprite.size)) {
    sprite.handleClick();
  }
}

function isInsideTriangle(px, py, x, y, size) {
  const d = dist(px, py, x, y + size);
  return px >= x - size && px <= x + size && py >= y && py <= y + size && d <= size;
}