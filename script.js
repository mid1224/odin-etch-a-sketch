for (let i = 0; i < 16*16; i++)
{
    let newDiv = document.createElement("div");
    newDiv.className = "grid";
    document.getElementById("container").appendChild(newDiv);
}

let gridItems = document.getElementsByClassName("grid");

for (let i = 0; i < gridItems.length; i++)
{
    gridItems[i].addEventListener("mouseenter", function(event) {
        event.target.style.background = "black";
    })
}

let settingButton = document.getElementById("setting-button");

settingButton.addEventListener("click", () => {
    let gridSize = 0;
    gridSize = prompt("Number of square per sides (0-100): ");

    if (gridSize > 100)
    {
        gridSize = 100;
    }
    else if (gridSize < 0)
    {
        gridSize = 1;
    }

    while(gridItems.length > 0)
    {
        gridItems[0].remove();
    }

    for (let i = 0; i < gridSize*gridSize; i++)
    {
        let newDiv = document.createElement("div");
        newDiv.className = "grid";
        document.getElementById("container").appendChild(newDiv);
    }
    
    gridItems = document.getElementsByClassName("grid");
    
    for (let i = 0; i < gridItems.length; i++)
    {
        gridItems[i].addEventListener("mouseenter", function(event) {
            event.target.style.background = "black";
        })

        gridItems[i].style = "flex: 1 0 calc(100% /" + gridSize.toString() + ")";
    }
})

let resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    let currentGridSize = gridItems.length;

    while(gridItems.length > 0)
    {
        gridItems[0].remove();
    }

    for (let i = 0; i < currentGridSize; i++)
    {
        let newDiv = document.createElement("div");
        newDiv.className = "grid";
        document.getElementById("container").appendChild(newDiv);
    }
    
    gridItems = document.getElementsByClassName("grid");
    
    for (let i = 0; i < gridItems.length; i++)
    {
        gridItems[i].addEventListener("mouseenter", function(event) {
            event.target.style.background = "black";
        })

        gridItems[i].style = "flex: 1 0 calc(100% /" + Math.sqrt(currentGridSize) + ")";
    }
})