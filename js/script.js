const gridContainer = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  const gridRow = document.createElement("div");
  gridRow.className = "row";
  gridContainer.appendChild(gridRow);
  
  for (let j = 0; j < 15; j++) {
    const gridColumn = document.createElement("div");
    gridColumn.className = "column";
    gridRow.appendChild(gridColumn);
  }
}

[...document.querySelectorAll(".column")].forEach(function(item) {
  item.addEventListener("mouseover", function() {
    item.style.backgroundColor = "red";
  });
});