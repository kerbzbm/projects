// Create Secret Number
var secretNumber = 3;
//ask user for guess
var stringGuess = prompt("Guess a number!");
//check guess
var guess = (Number(stringGuess));

if (guess === secretNumber) {
    alert("You got it right!");
}

else if (guess > secretNumber) {
    alert("to high, guess again!")
}

else {
    alert("to low, try again!");
}