const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 200;
let enemies = [];
let enemyMove = false;

// ctx.beginPath();
// ctx.rect(x, y, 100, 100);
// ctx.stroke();
// ctx.fill();
// ctx.closePath();
// console.log(enemy);

function initEmemy() {
  for (let j = 0; j < 5; j++) {
    enemies.push({ x: 100 + 200 * j, y: 100 });
  }
}
initEmemy();
// console.log(enemies);
// console.log(enemies.y);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let j = 0; j < 5; j++) {
    ctx.beginPath();
    ctx.rect(enemies[j].x, enemies[j].y, 100, 100);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    enemies[j].x += 10;
    initEmemy();
  }
}
setInterval(draw, 50);
