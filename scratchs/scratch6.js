let bullets = [];
let spacePressed = false;
let shipX = 100;
let shipY = 100;

document.addEventListener("keydown", KeyDown);

function KeyDown(event) {
  if (event.keyCode === 32) {
    spacePressed = true;
    fireBullet();
    console.log(`space pressed`);
  }
}

function fireBullet() {
  const newBullet = {
    x: shipX + 50,
    y: 100
  };
  bullets.push(newBullet);
  console.log(bullets);
}
