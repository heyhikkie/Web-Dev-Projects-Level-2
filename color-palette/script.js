const colorPalette = document.getElementById("color-palette");
const generateButton = document.getElementById("generate-button");
const discoButton = document.getElementById("disco-button");
const stopDiscoButton = document.getElementById("stop-disco-button");
let colors = [];
let backgroundInterval;
let discoInterval;

generateButton.addEventListener("click", generatePalette);
discoButton.addEventListener("click", startDisco);
stopDiscoButton.addEventListener("click", stopDisco);

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateColorBox(randomColor) {
  const colorBox = document.createElement("div");
  colorBox.className = "color-box";
  colorBox.style.backgroundColor = randomColor;
  colorBox.addEventListener("click", () => copyToClipboard(randomColor));
  return colorBox;
}

function generatePalette() {
  colors = [];
  colorPalette.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const randomColor = generateRandomColor();
    colors.push(randomColor);
    const colorBox = generateColorBox(randomColor);
    colorPalette.appendChild(colorBox);
  }
}


function copyToClipboard(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert(`Copied: ${text}`);
}


async function startDisco() {
  backgroundInterval = setInterval(generateRandomBackgroundColor, 1000);
  discoInterval = setInterval(generatePalette, 400);
}

function stopDisco() {
  clearInterval(backgroundInterval);
  document.body.style.backgroundColor = '#315968';
  clearInterval(discoInterval);
}

function generateRandomBackgroundColor() {
  document.body.style.backgroundColor = generateRandomColor();
}

generatePalette();
