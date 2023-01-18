const gridColumns = 1;
const gridRows = 1;
const opacityIncrease = 0.1;
const defaultOpacity = 0;

const container = document.querySelector("#container");

function getOpacity(elem) {
    let boxStyles = window.getComputedStyle(elem);
    let opacity = boxStyles.getPropertyValue("opacity");
    return opacity;
}

function setOpacity(elem, opacityValue) {
    elem.style.setProperty('opacity', `${opacityValue}`);
}

function genGrid (rows, columns) {
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 10px)`;
    for (let i = 0; i < (rows * columns); i++) {
        let box = document.createElement("div");
        container.appendChild(box).className = "box";
    }
}
  
genGrid(80, 100);

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) =>{
    box.addEventListener("mouseenter", () => {
        oldOpacity = parseFloat(getOpacity(box));
       // oldOpacity = parseFloat(oldOpacity);
        let newOpacity = oldOpacity + opacityIncrease;
        setOpacity(box, newOpacity)
    })
})

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        setOpacity(box, defaultOpacity);
    })
})