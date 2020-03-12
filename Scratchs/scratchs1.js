let alienX = 100;
let alienY = 100;
let alienMove = false;
const canvas = document.querySelector("#scratchs1");
const ctx = canvas.getContext("2d");

function aliens() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (alienMove === false) {
    alienX += 20;
  } else {
    alienX -= 20;
  }
  if (alienX >= 1500) {
    enemyMove = true;
    alienY += 50;
  }
  if (alienX <= 0) {
    enemyMove = false;
    alienY += 50;
  }
  console.log(alienX, alienY);

  drawAlien();
}
setInterval(aliens, 50);

function drawAlien() {
  ctx.beginPath();
  ctx.rect(alienX, alienY, 75, 75);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}
