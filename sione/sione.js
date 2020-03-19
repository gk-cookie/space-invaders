const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 200;
let enemyX = 100;
let enemyY = 100;
let enemyMove = false;
let leftPress = false;
let rightPress = false;
let bullets = [];
let frameCounter = 0;
let lastFired = 0;

function theEnemy() {
  ctx.beginPath();
  ctx.rect(enemyX, enemyY, 100, 100);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

function drawShip() {
  ctx.beginPath();
  ctx.rect(x, y, 100, 100);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

function draw() {
  if (leftPress === true && x >= 0) {
    x -= 15;
    console.log(x);
  }
  if (rightPress === true && x < 1500) {
    x += 15;
    console.log(x);
  }

  if (enemyMove === false) {
    enemyX += 25;
  } else {
    enemyX -= 25;
  }
  if (enemyX >= 1500) {
    enemyMove = true;
    enemyY += 50;
  }
  if (enemyX <= 0) {
    enemyMove = false;
    enemyY += 50;
  }
  frameCounter++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawShip();
  theEnemy();
  drawBullets();
}
setInterval(draw, 50);

function drawBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    ctx.beginPath();
    ctx.rect(bullets[i].x, bullets[i].y, 25, 25);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    bullets[i].y -= 15;
    if (bullets[i].y < 0) {
      bullets.splice(i, 1);
      console.log(bullets);
    }
  }
}

function addBullets() {
  const frameSinceBullet = frameCounter - lastFired;

  if (frameSinceBullet > 5) {
    const bulletFired = {
      x: x + 37,
      y: y - 25
    };
    lastFired = frameCounter;
    bullets.push(bulletFired);
  }
}
function handleKeyDown(event) {
  if (event.keyCode === 37) {
    leftPress = true;
  } else if (event.keyCode === 39) {
    rightPress = true;
  }
}

function handleKeyUp(event) {
  if (event.keyCode === 37) {
    leftPress = false;
  } else if (event.keyCode === 39) {
    rightPress = false;
  } else if (event.keyCode === 32) {
    addBullets();
  }
}
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
