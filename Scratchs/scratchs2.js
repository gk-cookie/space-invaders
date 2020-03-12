let alienX = 100;
let alienY = 100;
let moveRight = true;
let screenWidth = 300;
let screenHeight = 1000;

for (let i = 1; i < 20; i++) {
  if (moveRight) {
    alienX += 50;
  } else {
    alienX -= 50;
  }

  if (alienX >= screenWidth) {
    alienY += 50;
    moveRight = false;
  }
  if (alienX <= 0) {
    alienY += 50;
    moveRight = true;
  }

  console.log(alienX, alienY);
}
