let enemyX = 150;
let enemyY = 200;

const bullets = [
  { x: 150, y: 800 },
  { x: 250, y: 800 }
];

function updateBullets() {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].y -= 50;
    console.log(bullets[i].y, bullets[i].x);
  }

  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].y <= 0) {
      bullets.splice(i, 1);
    }
  }

  if (bullets[i].x === enemyX && bullets[i].y === enemyY) {
    bullets.splice(i, 1);
  }    




  // move bullets
  // remove bullets at top of screen
  // check for collisions
}

for (let i = 0; i < 20; i++) {
  updateBullets();
}
