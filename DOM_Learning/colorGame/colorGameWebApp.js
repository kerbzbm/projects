let numSquares = 6;
let colors = generateRandomColors(numSquares);   
const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset")
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match pickedColor
    colorDisplay.textContent = pickedColor;
    // change colors of the squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323"
});

for (var i = 0; i < squares.length; i++){
    //Add intital colors to squares
    squares[i].style.backgroundColor = colors[i];

    //Add click listeners to squares
    squares[i].addEventListener("click", function(){
        //Grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color){
    //Loop through all squares
    for (var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    //Generate random whole number based on length of array, store in variable.
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){
    //make an array
    let arr =[];
    //repeat num times
    for (var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    };
    //return array
    return arr;
};

function randomColor() {
    //pick a "red" from 0-255
    let r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    let g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};