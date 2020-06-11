const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 200;

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
spaceship()
}

setInterval(draw, 50);