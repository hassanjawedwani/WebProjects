import { colors } from "./colors.js";


const body = document.querySelector("body");
const btn = document.getElementById("btn");
const colorName = document.getElementById('color-name');
const hexCode = document.getElementById('hex-code');
const hsl = document.getElementById('hsl-code');



const randomColor = () => {
  const randomObjectIndex = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randomObjectIndex].name;
  colorName.innerText = colors[randomObjectIndex].name;
  hexCode.innerText = colors[randomObjectIndex].hex;
  hsl.innerText = colors[randomObjectIndex].hsl;
}


btn.onclick = randomColor; 