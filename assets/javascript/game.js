

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var answer = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(answer);
var userGuess;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
// var guessesSoFar = "";

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");


document.onkeyup = function (event)  {
    var userGuess = event.key;
    for (i=0; i<11; i++){
        guessesSoFar = event.key[i];

    }

    if (userGuess === answer) {
        wins++;
    }
    
    if (userGuess !== answer) {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        alert("All guesses gone.  Try again!");
        guessesLeft = 10;
        var answer = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

        winsText.textContent = "Wins: " + wins;
        guessesLeft.textContent = "Guesses Left: " - guessesLeft;
        lossesText.textContent = "Losses: " + losses;
        guessesSoFar.textContent = "Your guesses so far: ";

};


// // for (i = 0; i<10; i++){

// }
