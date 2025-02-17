for (let i = 0; i < 16*16; i++)
{
    let newDiv = document.createElement("div");
    newDiv.className = "grid";
    document.getElementById("container").appendChild(newDiv);
}


let gridItems = document.getElementsByClassName("grid");

for (let j = 0; j < gridItems.length; j++)
{
    gridItems[j].addEventListener("mouseenter", function(event) {
        event.target.style.background = "black";
    })
}