const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 200;
let enemy = [];
// let enemy = 100;
let enemyMove = false;
let leftPress = false;
let rightPress = false;
let bullets = [];
let frameCounter = 0;
let lastFired = 0;


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
    enemy.x += 25;
  } else {
    enemy.x -= 25;
  }
  if (enemy.x >= 1500) {
    enemyMove = true;
    enemy.y += 50;
  }
  if (enemy.x <= 0) {
    enemyMove = false;
    enemy.y += 50;
  }
  frameCounter++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawShip();
  theEnemy();
  drawBullets();
  checkBullets();
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
function theEnemy() {
enemy.push[{x: 100, y: 100}];
  // for (let j = enemy.length - 1; j < 5; j++)
  ctx.beginPath();
  ctx.rect(enemy.x, enemy.y, 100, 100);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

function addBullets() {
  const frameSinceBullet = frameCounter - lastFired;

  if (frameSinceBullet > 5) {
    const bulletFired = {
      x: x + 37,
      y: y - 25,
    };
    lastFired = frameCounter;
    bullets.push(bulletFired);
  }
}

function checkBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    if (
      bullets[i].x + 25 > enemy[j].x &&
      bullets[i].x < enemy[j].x + 100 &&
      bullets[i].y + 25 > enemy[j].y &&
      bullets[i].y < enemy[j].y + 100
    ) {
      enemy[j].y = 100;
      enemy[j].x = 100;
    }
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