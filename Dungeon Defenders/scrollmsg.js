let img;
let scrollSpeed = 0.4;
let scrollPos;

function preload() {
  img = loadImage('scrollletterwithoutbackground.png'); // Replace 'scroll letter.png' with the path to your image
}

function setup() {
  createCanvas(700, 500);
  scrollPos = img.height; // Set initial scroll position to the height of the image
}

function draw() {
  background(0);
  
  // Calculate the position to draw the image
  let yPos = scrollPos % img.height;

  // Draw the image with scrolling effect
  image(img, 0, yPos - img.height, width, height + img.height);
  
  // Update scroll position
  scrollPos -= scrollSpeed;

  // Reset scroll position if it reaches the top of the image
  if (scrollPos < 0) {
    scrollPos = img.height;
  }
}
