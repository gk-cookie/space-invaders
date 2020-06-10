const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 200;
let enemies = [];

function initEmemy() {
  for (let j = 0; j < 5; j++) {
    enemies.push({ x: 100 + 200 * j, y: 100, direction: 1 });
  }
}
initEmemy();

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawEnemy() {
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.rect(enemies[i].x, enemies[i].y, 100, 100);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}

function enemyMove() {
  for (let enemy of enemies) {
    enemy = enemies[i].x;
    enemy += 10;
  }
}

function draw() {
  clearCanvas();
  drawEnemy();
  enemyMove();
}

setInterval(draw, 50);
