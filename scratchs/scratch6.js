let spacePressed = false;
document.addEventListener("keydown", KeyDown);

function KeyDown(event) {
  if (event.keyCode === 32) {
    spacePressed = true;
    console.log(`space pressed`);
  } 
}
