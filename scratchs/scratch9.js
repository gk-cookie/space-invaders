const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 200;
let leftPress = false;
let rightPress = false;
let bullets = [];
let frameCounter = 0;
let lastFired = 0;

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
  frameCounter++
  spaceship();
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

function handleKeyDown(event) {
  if (event.keyCode === 37) {
    leftPress = true;
    console.log("left");
    if (leftPress === true && x >= 0) {
      x -= 15;
      console.log(x);
    }
  } else if (event.keyCode === 39) {
    console.log("right");

    rightPress = true;
    if (rightPress === true && x < 1500) {
      x += 15;
      console.log(x);
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
