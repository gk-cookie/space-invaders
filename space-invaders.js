const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 200;
let leftPressed = false;
let rightPressed = false;
let enemyX = 100;
let enemyY = 100;
let enemyMove = false;
let bullets = [];
let enemies = [];
let frameCounter = 0;
let lastFired = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  frameCounter++;
  if (leftPressed === true && x - 5 > 0) {
    x -= 25;
  }
  if (rightPressed === true && x + 5 < 1475) {
    x += 25;
  }
  if (enemyMove === false) {
    enemyX += 30;
  } else {
    enemyX -= 30;
  }
  if (enemyX >= 1500) {
    enemyMove = true;
    enemyY += 50;
  }
  if (enemyX <= 0) {
    enemyMove = false;
    enemyY += 50;
  }
  checkBullets();
  drawBullets();
  drawShip();
  drawEnemy();
}

function drawEnemy() {
  ctx.beginPath();
  ctx.rect(enemyX, enemyY, 100, 100);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}
function drawShip() {
  ctx.beginPath();
  ctx.rect(x, y, 125, 125);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

function addBullet() {
  const frameSinceBullet = frameCounter - lastFired;

  if (frameSinceBullet > 5) {
    const newBullet = {
      x: x + 50,
      y: y - 25
    };
    bullets.push(newBullet);
    lastFired = frameCounter;
  }
}

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
    }
  }
}

function checkBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    if (
      bullets[i].x + 25 > enemyX &&
      bullets[i].x < enemyX + 100 &&
      bullets[i].y + 25 > enemyY &&
      bullets[i].y < enemyY + 100
    ) {
      enemyY = 100;
      enemyX = 100;
    }
  }
}

setInterval(draw, 50);

function handleKeyDown(event) {
  if (event.keyCode === 37) {
    leftPressed = true;
  } else if (event.keyCode === 39) {
    rightPressed = true;
  } else if (event.keyCode === 32) {
    addBullet();
  }
}

function handleKeyUp(event) {
  if (event.keyCode === 37) {
    leftPressed = false;
  } else if (event.keyCode === 39) {
    rightPressed = false;
  }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
