const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
let p1Display = document.querySelector("#p1LiveScore");
let p2Display = document.querySelector("#p2LiveScore");
let p1Score = 0;
let p2Score = 0;
let h1 = document.querySelector("h1");
const resetButton = document.querySelector("#rst")
let gameOver = false;
let winningScore = 5;
let numInput = document.querySelector("input");
let winningScoreDisplay = document.querySelector("p span");

// On-Click event listeners for the Player 1/Player 2 buttons. Incriments by 1 point per click.
// Checks if game over not false, then incriments a point by 1.
// If total points are equal to the winning score, changes game over to true and adds a green color to the winning players points.
p1.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add("winner");
        }
            p1Display.textContent = p1Score;
    };
});

p2.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            p2Display.classList.add("winner");
        }
            p2Display.textContent = p2Score;
    };
});
//
//Event listener for the reset button. Calls on reset function when clicked.
resetButton.addEventListener("click", function(){
    reset();
});
//Function for resetting the game.
function reset (){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}
//Event listener for returning a changed value in the input element.
numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});