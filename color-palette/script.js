const colorPalette = document.getElementById("color-palette");
const generateButton = document.getElementById("generate-button");
const saveButton = document.getElementById("save-button");
let colors = [];

generateButton.addEventListener("click", generatePalette);

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette() {
  colors = [];
  colorPalette.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const randomColor = generateRandomColor();
    colors.push(randomColor);
    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = randomColor;
    colorBox.addEventListener("click", () => copyToClipboard(randomColor));
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

generatePalette();
