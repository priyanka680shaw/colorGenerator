

//addding ddivs into container
let colorContainer = document.querySelector("#colorContainer");
for(let i=0; i<30; i++){
    let colorBox = document.createElement("div");
    // colorBox.style.height = "100px";
    // colorBox.style.width = "100px";
    // colorBox.style.backgroundColor = "red";
    //colorBox.id = "cb";
    colorBox.classList.add("colorBox");
    colorContainer.appendChild(colorBox);
}
//random color code
 function randomColor(){
    let colorCode = "0123456789abcdef";
    let getColor = "#";
    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random()*colorCode.length);
        getColor += colorCode[randomIndex];
    }
     return getColor;
    //console.log(getColor);
}
//adiing colors into the color box
let allColorbox = document.querySelectorAll(".colorBox");
allColorbox.forEach((box) => {
    let setColor = randomColor();
    box.style.backgroundColor = setColor;
    box.innerText = setColor;
})