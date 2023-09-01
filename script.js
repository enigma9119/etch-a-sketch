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

createGrid();
