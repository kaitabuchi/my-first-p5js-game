var playerX = 0;
var playerY = 0;
var playerSize = 60;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  movePlayer();
  
  fill(300, 0, 50)
  rect(playerX, playerY, playerSize, playerSize);
}

function movePlayer() {
  //playerX = mouseX - playerSize / 2;
  //playerY = mouseY - playerSize / 2;
  
  if (keyIsPressed) {
   if (keyCode == RIGHT_ARROW) {
      playerX +=5; 
   }  else if (keyCode == LEFT_ARROW) {
     playerX -= 5;
   }  else if (keyCode == UP_ARROW) {
     playerY -= 5; 
   }   else if (keyCode == DOWN_ARROW) {
     playerY +=5;
   }
  } 
}