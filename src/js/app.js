import Icon from "./goblin.png";

let cells = document.querySelectorAll(".cell");
let img = document.createElement("img");

img.src = Icon;
img.classList.add("goblin");

let prevCellIndex = -1;
setInterval(() => {
  let cellsRandom;
  do {
    cellsRandom = Math.floor(Math.random() * cells.length);
  } while (cellsRandom === prevCellIndex);

  prevCellIndex = cellsRandom;
  cells[cellsRandom].appendChild(img);
}, 1000);
