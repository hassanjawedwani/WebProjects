const canvas = document.getElementById("draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function Draw(e) {
  console.log(e);
}

canvas.addEventListener("mousemove", Draw);