var btnRainbowPick = document.getElementById("btnChangeColor");
btnRainbowPick.addEventListener("click", changeColorRandom);

function changeColorRandom() {
  let arrRGB = [];
  for (let i = 0; i < 3; i++) {
    const val = Math.floor(Math.random() * 255 + 1);
    arrRGB.push(val);
  }
  const strColor = "rgb(" + arrRGB.join(",") + ")";
  btnRainbowPick.style.backgroundColor = strColor;
}
