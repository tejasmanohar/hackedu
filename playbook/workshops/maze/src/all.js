//===================================
//

function setup() {
  createCanvas(230, 440);
}

function draw() {
  background(255, 240, 220);
  drawSprites();
}

//===================================
//

var maze;

function setup() {
  createCanvas(230, 440);

  maze = createSprite(113, 218);
}

function draw() {
  background(255, 240, 220);
  drawSprites();
}

//===================================
//

var maze;
var mazeImage;

function setup() {
  createCanvas(230, 440);

  maze = createSprite(113, 218);
  mazeImage = loadImage("http://i.imgur.com/qB6qHIp.png");
  maze.addImage(mazeImage);
}

function draw() {
  background(255, 240, 220);
  drawSprites();
}

//===================================
//

var maze;
var mazeImage;

function setup() {
  createCanvas(230, 440);

  maze = createSprite(113, 218);
  mazeImage = loadImage("http://i.imgur.com/qB6qHIp.png");
  maze.addImage(mazeImage);
}

function draw() {
  background(255, 240, 220);
  drawSprites();

  if(maze.overlapPixel(mouseX, mouseY)){
    maze.remove();
  }

}
