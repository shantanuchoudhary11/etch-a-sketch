const container = document.querySelector(".container");
const input = document.querySelector("#grid-length");
const btn = document.querySelector("#action");
const GAP = 16;

function rgbRandomizer() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randColor = `rgb(${r}, ${g}, ${b})`;
    return randColor;
}

function createGrid() {
  const sides = Math.min(100, Math.max(1, Number(input.value) || 4));
  container.replaceChildren();
  for (let i = 0; i < sides * sides; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.flex = `0 0 calc((100% - ${(sides - 1) * GAP}px) / ${sides})`;
    let colored = false;
    let opacity =0;
    box.addEventListener("mouseenter", () => {
      if (!colored) {
        box.style.backgroundColor = rgbRandomizer();
        colored = true;
      }
      opacity += 0.1;
      box.style.opacity = Math.min(opacity,1);
    });
    container.appendChild(box);
  }
}

btn.addEventListener("click", createGrid);
createGrid();
