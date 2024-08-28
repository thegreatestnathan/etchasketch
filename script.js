let squaredivs = document.getElementById("squaredivs");


function initialise(value = 16) {
    squaredivs.innerHTML = '';
    for (let i = 0; i < value; i++) {
        let singlerow = document.createElement("div");
        singlerow.className = "singlerow";
        for (let j = 0; j < value; j++){
            let smallsquare = document.createElement("div");
            smallsquare.className = "smallsquare";
            /*smallsquare.addEventListener ("mouseenter", (event) =>{
                event.target.style.backgroundColor = "purple";
                console.log("event");
            })*/
            smallsquare.style.width = (30 * 16 / value - 2) + "px";
            smallsquare.style.height = (30 * 16 / value - 2) + "px";
            singlerow.appendChild(smallsquare);
        }
        squaredivs.appendChild(singlerow);
    }

    squaredivs.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("smallsquare")) {
            event.target.classList.add("hovered");
            hover(event.target);
        }
    }, true);}

let colorchosen = "#000000"
function hover(square, color = colorchosen){
    square.style.backgroundColor = color;
};


let size = document.getElementById("gridsize");
size.addEventListener("input", (event) => {
    let value = size.value;
    initialise(value);
});
 
let color = document.getElementById("color");
color.addEventListener("input", (event) => {
    colorchosen = color.value;
    let allSquares = document.querySelectorAll(".hovered");
    allSquares.forEach(square => {
        square.style.backgroundColor = colorchosen;
    })
    return colorchosen;
    console.log(color.value);

});


let sizereset = document.getElementById("resetsize");
sizereset.addEventListener("click", (event) => {
    console.log("button pressed");
    initialise();
});

let colorreset = document.getElementById("resetcolors")
colorreset.addEventListener("click", (event) => {
    console.log("button pressed");
    let allSquares = document.querySelectorAll(".hovered");
    allSquares.forEach(square => {
        square.classList.remove("hovered");
    })
});

initialise();