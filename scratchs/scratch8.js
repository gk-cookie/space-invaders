const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 200;
enemy = [];

ctx.beginPath();
ctx.rect(x, y, 100, 100);
ctx.stroke();
ctx.fill();
ctx.closePath();
console.log(enemy);

function initEmemy() {
    for (let j = 0; j > 5; j++) {
        enemy.push({ x: 100, y: 100 });
        ctx.beginPath();
    ctx.rect(enemy[j].x, enemy[j].y, 100, 100);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}
initEmemy();
