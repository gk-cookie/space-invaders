let alienX = 100;
let alienY = 100;
let moveRight = true;

function moveAlien() {
  if (moveRight) {
    alienX += 25;
  } else {
    alienX -= 25;
  }
  if (alienX >= 300) {
    alienY += 50;
    moveRight = false;
  }
  if (alienX <= 50) {
    alienY += 50;
    moveRight = true;
  }
  console.log(alienX, alienY);
}

for (let i = 1; i < 25; i++) {
  moveAlien();
}
