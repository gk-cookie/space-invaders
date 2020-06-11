const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 200;
let leftPress = false;
let rightPress = false;

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
  spaceship();
}

setInterval(draw, 50);

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
    }
  }

  
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
