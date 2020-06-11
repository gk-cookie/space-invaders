const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 200;
let leftPress = false;
let rightPress = false;
let bullets = [];
let enemies = [];
let frameCounter = 0;
let lastFired = 0;

function initEmemy() {
  for (let j = 0; j < 5; j++) {
    enemies.push({ x: 100 + 200 * j, y: 100, direction: 1 });
  }
}
initEmemy();

function spaceship() {
  ctx.beginPath();
  ctx.rect(x, y, 100, 100);
  ctx.fill();
  ctx.closePath();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  clearCanvas();
  frameCounter++;
  spaceship();
  drawBullets();
  checkBullets();
  drawEnemy();
  enemyMove();
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
    }
  }
}

function addBullets() {
  const frameSinceBullet = frameCounter - lastFired;

  if (frameSinceBullet > 5) {
    const newBullet = {
      x: x + 37,
      y: y - 25,
    };
    lastFired = frameCounter;
    bullets.push(newBullet);
    console.log(bullets);
  }
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
    enemy.x += 10 * enemy.direction;
    if (enemy.x >= 1500) {
      enemy.y += 110;
      enemy.direction = -1;
    }
    if (enemy.x <= 0) {
      enemy.y += 110;
      enemy.direction = 1;
    }
  }
}

function checkBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    for (let j = enemies.length - 1; j >= 0; j--) {
      const bullet = bullets[i];
      const enemy = enemies[j];

      if (checkBullet(bullet, enemy)) {
        enemy.x = 1000;
        enemy.y = 1000;
      }
    }
  }
}

function checkBullet(bullet, enemy) {
//   console.log(bullet, enemy);
  return (
    bullet.x + 25 > enemy.x &&
    bullet.x < enemy.x + 100 &&
    bullet.y + 25 > enemy.y &&
    bullet.y < enemy.y + 100
  );
}

function handleKeyDown(event) {
  if (event.keyCode === 37) {
    leftPress = true;
    if (leftPress === true && x >= 0) {
      x -= 15;
    }
  } else if (event.keyCode === 39) {
    rightPress = true;
    if (rightPress === true && x < 1500) {
      x += 15;
    }
  }
}

function handleKeyUp(event) {
  if (event.keyCode === 37) {
    leftPress = false;
  } else if (event.keyCode === 39) {
    rightPress = false;
  } else if (event.keyCode === 32) {
    console.log("space pressed");

    addBullets();
  }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
