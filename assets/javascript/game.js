var wins = 0;
var words = ["cat", "dog"]; //These are possible words.
var lettersGuess = []; //These are the letters the user has guessed.
var guesses = 5; //This is a counter for the number of guesses.  It counts down to 0.
var alreadyGuessed = [];
var correctGuesses = 0;

var chosenWord = words[Math.floor(Math.random() * words.length)]; //Gives a random word
var chosenWordArray = chosenWord.split('');
console.log(chosenWordArray);

alreadyGuessed.length = chosenWordArray.length;
console.log("The length of your array is " + alreadyGuessed.length);
alreadyGuessed.fill("_");

var lettersGuessed = [""];

    document.onkeyup = function (event) {

        // Determines which key was pressed.

        console.log(event.key);

        var userGuess = event.key;


        //First check if the letter has already been guessed.
        if (lettersGuessed.indexOf(userGuess) !== -1) {
            //If the letter has been guessed, tell the user.  Wait for next letter.
            console.log("You already guessed that.");
        } else {
            //If the letter is a new letter, first check if it's part of the word.
            var indexGuess = chosenWord.indexOf(userGuess);
            if (indexGuess === -1) {
                //If guess is not part of word, take away a guess.
                guesses = guesses - 1;
                console.log("Guesses left: " + guesses);
                console.log("Wrong");
            } else {
                //The letter is part of the word.
                alreadyGuessed[indexGuess] = userGuess;
                console.log(lettersGuess);
                console.log(alreadyGuessed);
                correctGuesses++;
                if (correctGuesses===chosenWord.length){
                    console.log("Winner ")
                }
            }

            //Add guess to already guessed.
            lettersGuessed.push(userGuess);

            //Check if the user is out of guesses.
            if (guesses === 0) {
                console.log("You've lost.");
            }
        }
    }
