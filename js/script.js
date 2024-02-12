const gridContainer = document.querySelector("#container");

function createMouseOver() {
  [...document.querySelectorAll(".column")].forEach(function (item) {
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = "black";
    });
  });
}

function setGrid(gridSize) {
  console.log("Setting Grid");
  console.log(gridContainer);
  for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement("div");
    gridRow.className = "row";
    gridContainer.appendChild(gridRow);

    for (let j = 0; j < gridSize; j++) {
      const gridColumn = document.createElement("div");
      gridColumn.className = "column";
      gridRow.appendChild(gridColumn);
    }
  }
  createMouseOver();
}

setGrid(16);

function resetScreen() {
  document.querySelector("#container").innerHTML = "";
  const gridSize = prompt("Enter a grid size (1-100):");

  if (gridSize > 100 || gridSize < 1) {
    alert("Incorrect entry. Enter 1-100 only");
    resetScreen();
  }

  setGrid(gridSize);
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetScreen);
