let shipX = 100;
let shipY = 100;
let leftPressed = false;
let rightPressed = false;

document.addEventListener("keydown", KeyDown);
document.addEventListener("keyup", KeyUp);

function KeyDown(event) {
  if (event.keyCode === 37) {
    leftPressed = true;
    shipX -= 20;
    console.log(`left pressed`, shipX);
  } else if (event.keyCode === 39) {
    rightPressed = true;
    shipX += 20;
    console.log(`right pressed`, shipX);
  }
}
function KeyUp(event) {
  if (event.keyCode === 37) {
    leftPressed = false;
  } else if (event.keyCode === 39) {
    rightPressed = false;
  }
}
