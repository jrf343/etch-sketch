let gridColumns = 1;
let gridRows = 1;

const container = document.querySelector("#container");

function genGrid (rows, columns) {
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 10px)`;
    for (let i = 0; i < (rows * columns); i++) {
        let box = document.createElement("div");
        container.appendChild(box).className = "box";
    }
}
  
genGrid(80, 100);