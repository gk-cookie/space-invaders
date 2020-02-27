const canvas = document.querySelector("#space-invaders");
const ctx = canvas.getContext("2d");



ctx.beginPath();
ctx.rect(700, 850, 125, 125);
ctx.stroke();
ctx.fill();
ctx.closePath();

// const MOVE_AMOUNT = 10;

// const { width, height } = canvas;

// let x = Math.floor(Math.random() * width);
// let y = Math.floor(Math.random() * height);



// function draw({ key }) {
//   hue = hue + 10;
//   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
//   console.log(key);
//   ctx.beginPath();
//   ctx.moveTo(x, y);
//   switch (key) {
//     case "ArrowUp":
//       y -= MOVE_AMOUNT;
//       break;
//     case "ArrowRight":
//       x += MOVE_AMOUNT;
//       break;
//     case "ArrowDown":
//       y += MOVE_AMOUNT;
//       break;
//     case "ArrowLeft":
//       x -= MOVE_AMOUNT;
//       break;
//     default:
//       break;
      
//   }
//   ctx.lineTo(x, y);
//   ctx.stroke();
// }

// function handleKey(e) {
//   if (e.key.includes("Arrow")) {
//     e.preventDefault();
//     draw({ key: e.key });
//   }
// }


// function makeSquare() {
//   // x and y have a value at this point
//   // you can update x and y

//   ctx.beginPath();
//   ctx.moveTo(x, y);
//   x += 150;
//   ctx.lineTo(x, y);
//   y += 150;
//   ctx.lineTo(x, y);
//   x -= 150;
//   ctx.lineTo(x, y);
//   ctx.closePath();
//   y -= 150;
//   ctx.stroke();
// }



// window.addEventListener("keydown", handleKey);
