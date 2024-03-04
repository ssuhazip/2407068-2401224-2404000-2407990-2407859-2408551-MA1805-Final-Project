let img;
let scrollSpeed = 0.4;
let scrollPos = 0;

function preload() {
  img = loadImage('scroll.png'); // Replace 'your_image.jpg' with the path to your image
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  image(img, 0, -scrollPos, width, height); // Draw the image with scrolling effect

  // Update scroll position
  scrollPos += scrollSpeed;

  // Reset scroll position if it reaches the bottom of the image
  if (scrollPos > img.height - height) {
    scrollPos = 0;
  }
}
