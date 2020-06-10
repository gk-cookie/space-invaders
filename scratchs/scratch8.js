const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 200;
let enemies = [];
let enemyMove = false;

function initEmemy() {
  for (let j = 0; j < 5; j++) {
    enemies.push({ x: 100 + 200 * j, y: 100 });
  }
}
initEmemy();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let j = 0; j < 5; j++) {
    ctx.beginPath();
    ctx.rect(enemies[j].x, enemies[j].y, 100, 100);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    enemies[j].x += 10;
    
    if (enemyMove === false) {
      enemies[j].x += 25;
    } else {
      enemies[j].x -= 25;
    }
    if (enemies[j].x >= 1500) {
      enemyMove = true;
      enemies[j].y += 50;
    }
    if (enemies[j].x <= 0) {
      enemyMove = false;
      enemies[j].y += 50;
    }
  }
}
setInterval(draw, 50);
