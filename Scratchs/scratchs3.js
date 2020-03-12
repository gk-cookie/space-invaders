let alienX = 100;
let alienY = 100;
let moveRight = true;

function moveAlien() {
  if (moveRight) {
    alienX += 25;
  } else {
    alienX -= 25;
  }
  if (alienX >= 400) {
    alienY += 30;
    moveRight = false;
  }
  if (alienX <= 100) {
    alienY += 30;
    moveRight = true;
  }
  console.log(alienX, alienY);
}

for (let i = 1; i < 35; i++) {
  moveAlien();
}
