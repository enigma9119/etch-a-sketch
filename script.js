const NUM_SQUARES_PER_ROW_AND_COLUMN = 16;

const container = document.querySelector(".container");

function createGrid(dimensions = NUM_SQUARES_PER_ROW_AND_COLUMN) {
  for (let i = 0; i < dimensions; ++i) {
    for (let j = 0; j < dimensions; ++j) {
      const square = document.createElement("div");

      // Each square should fill up an equal proportion of the smaller window dimension.
      // This ensures that the grid fits in the window without a need to scroll.
      if (window.innerWidth < window.innerHeight) {
        container.style.flexDirection = "row";
      } else {
        container.style.flexDirection = "column";
      }

      const squareWidth = 100 / dimensions;
      square.style.flexBasis = `${squareWidth}%`;
      square.style.aspectRatio = "1 / 1";
      square.style.backgroundColor = "honeydew";
      square.style.border = "1px solid black";

      addHoverListener(square);
      container.appendChild(square);
    }
  }

  window.addEventListener("resize", resizeGrid);
}

function resizeGrid(e) {
  if (window.innerWidth < window.innerHeight) {
    container.style.flexDirection = "row";
  } else {
    container.style.flexDirection = "column";
  }
}

function addHoverListener(element) {
  element.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "brown";
  });
  element.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "honeydew";
    e.target.style.transitionDuration = "1s";
  });
}

function eraseCurrentGrid() {
  const containerChildren = document.querySelector(".container").children;

  for (let child of Array.from(containerChildren)) {
    child.remove();
  }
}

createGrid();

// Create new grid when requested by user
const gridSizeButton = document.querySelector("button");
gridSizeButton.addEventListener("click", (e) => {
  dimensions = +prompt("Enter number of squares per side (limit = 100)", 16);
  if (dimensions > 100) dimensions = 100;
  if (!Number.isInteger(dimensions) || dimensions <= 0) {
    alert("Invalid Number!");
    return;
  }

  eraseCurrentGrid();
  createGrid(dimensions);
});
