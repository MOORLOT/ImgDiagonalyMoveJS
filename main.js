let x = 0;
let y = 0;
let interval;
let speed = 100;
let imgWidth = 100; // Linked with css
let imgHeight = 100; // Linked with css
let minX = 0;
let minY = 0;
let maxX = innerWidth - imgWidth; //1204 my resolution
let maxY = innerHeight - imgHeight;// 565 my resolution
let img = document.getElementById("img");

// alert(` Your X = ${maxX};\n Your Y = ${maxY}.`);

// Staring on load our body
function move() {
  console.log("x=" + x + "," + "y=" + y)
  interval = setInterval(rightDown, 1)
}

function rightDown() {
  console.log("x=" + x + "," + "y=" + y)
  img.style.left = (x += speed) + "px";
  img.style.top = (y += speed) + "px";
  if (y >= maxY) {
    clearInterval(interval);
    interval = setInterval(rightUp, 1)
  } else if (x >= maxX) {
    clearInterval(interval)
    interval = setInterval(leftDown, 1)
  }
}

function rightUp() {
  console.log("x=" + x + "," + "y=" + y)
  img.style.left = (x += speed) + "px";
  img.style.top = (y -= speed) + "px";
  if (x >= maxX || y <= minY) {
    clearInterval(interval);
    interval = setInterval(rightDown, 1)
  }
  // some sh*t
  else if (x >= maxX - 5) {
    clearInterval(interval)
    interval = setInterval(leftUp, 1)
  }
}

function leftDown() {
  console.log("x=" + x + "," + "y=" + y)
  img.style.left = (x -= speed) + "px";
  img.style.top = (y += speed) + "px";
  if (y >= maxY) {
    clearInterval(interval)
    interval = setInterval(leftUp, 1)
  } else if (x <= minX) {
    clearInterval(interval)
    interval = setInterval(rightDown, 1)
  }
}

function leftUp() {
  console.log("x=" + x + "," + "y=" + y)
  img.style.left = (x -= speed) + "px";
  img.style.top = (y -= speed) + "px";
  if (y <= minY) {
    clearInterval(interval)
    interval = setInterval(leftDown, 1)
  } else if (y <= maxY && x === minX) {
    clearInterval(interval)
    interval = setInterval(rightUp, 1)
  }
}
