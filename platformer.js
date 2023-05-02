var player = document.getElementById("player");
var platform1 = document.getElementById("platform1");
var platform2 = document.getElementById("platform2");
var platform3 = document.getElementById("platform3");

var playerX = 0;
var playerY = 0;
var playerVX = 0;
var playerVY = 0;
var gravity = 0.1;
var jumpSpeed = 5;
var leftPressed = false;
var rightPressed = false;
var upPressed = false;

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    leftPressed = true;
  } else if (event.key === "ArrowRight") {
    rightPressed = true;
  } else if (event.key === "ArrowUp") {
    upPressed = true;
  }
});

document.addEventListener("keyup", function(event) {
  if (event.key === "ArrowLeft") {
    leftPressed = false;
  } else if (event.key === "ArrowRight") {
    rightPressed = false;
  } else if (event.key === "ArrowUp") {
    upPressed = false;
  }
});

function updatePlayer() {
  // Move left or right
  if (leftPressed) {
    playerVX = -3;
  } else if (rightPressed) {
    playerVX = 3;
  } else {
    playerVX = 0;
  }
  
  // Jump
  if (upPressed && playerY === 0) {
    playerVY = jumpSpeed;
  }
  
  // Apply gravity
  playerVY -= gravity;
  
  // Update position
  playerX += playerVX;
  playerY += playerVY;
  
  // Keep player on screen
  if (playerX < 0) {
    playerX = 0;
  } else if (playerX > 380) {
    playerX = 380;
  }
  if (playerY < 0) {
    playerY = 0;
    playerVY = 0;
  } else if (playerY > 280) {
    playerY = 280;
   
