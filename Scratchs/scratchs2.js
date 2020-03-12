let alienX = 100;
let alienY = 100;
let moveAlien = false;
let screenWidth = 1000;
let screenHeight = 1000;

for (let i = 1; i < 100; i++) {
  console.log(alienX, alienY);
  if (moveAlien === false && alienX < screenWidth) {
    alienX += 20;
  } else {
    moveAlien = true;
  }
  if (moveAlien === true && alienX > 0) {
    alienX -= 20;
  }
}
