const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 200;
let leftPressed = false;
let rightPressed = false;
let spacePressed = false;
let enemyX = 100;
let enemyY = 100;
let enemyMove = false;
let bullets = [];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

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
  if (spacePressed === true) {
    const newBullet = {
      x: x + 50,
      y: y - 25
    };
    bullets.push(newBullet);
    console.log(bullets);
  }

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

function drawBullets() {
  for (let i = bullets.length - 1; i > 0; i--) {
    ctx.beginPath();
    ctx.rect(bullets[i].x, bullets[i].y, 25, 25);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();  
    bullets[i].y -= 15;
  }
  
}
setInterval(draw, 100);

function handleKeyDown(event) {
  if (event.keyCode === 37) {
    leftPressed = true;
  } else if (event.keyCode === 39) {
    rightPressed = true;
  } else if (event.keyCode === 32) {
    spacePressed = true;
    console.log(`Space Pressed`);
  }
}

function handleKeyUp(event) {
  if (event.keyCode === 37) {
    leftPressed = false;
  } else if (event.keyCode === 39) {
    rightPressed = false;
  } else if (event.keyCode === 32) {
    spacePressed = false;
  }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
