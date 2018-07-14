    var words = ['html', 'css', 'javascript', 'python', 'ruby', 'less', 'sass', 'php', 'go', 'java', 'swift', 'meteor', 'node', 'django', 'mysql', 'ionic', 'bootstrap', 'foundation', 'wordpress', 'drupal', 'net', 'angular', 'ember', 'backbone', 'jquery', 'underscore', 'mongodb', 'redis', 'oracle', 'sql', 'server', 'frontend', 'backend', 'http', 'ddp', 'rest', 'api', 'json', 'xml', 'csv'] //These are possible words.

    var chosenWord; //Holds the current word
    var chosenWordArray; //Holds the current word as an array of characters;

    var guesses; //This is a counter for the number of guesses.  It counts down to 0.
    var correctGuesses;//This is the number of correct guesses by the user.  It gets compared to the length.
    var currentState; //This is an array of the underscores and correct letters guessed by the user
    var lettersGuessed; //This is an array that holds the letters guessed so far (correct and incorrect)

    var wins=0;
    var losses=0;

    var guessedWordDiv = document.getElementById("guessedWord");
    guessedWordDiv.textContent = currentState;

    var guessesDiv = document.getElementById("guessesRemaining");
    guessesDiv.textContent=guesses;

    var alreadyGuessedDiv = document.getElementById("alreadyGuessed");

    var tallyDiv = document.getElementById("runningTally");
    tallyDiv.textContent=("Wins: "+wins + " Losses: " + losses);

    var letters=['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // document.querySelector("#guessedWord").innerHTML="help";

    var resetVariables = function(){
        lettersGuessed=[];
        console.log("The letters already guessed are "+lettersGuessed);
        guesses=10;
        currentState=[];
        correctGuesses=0;
        chosenWord=words[Math.floor(Math.random() * words.length)]; //Gives a random word
        chosenWordArray = chosenWord.split('');
        currentState.length = chosenWordArray.length;   
        currentState.fill("_");
        guessedWordDiv.textContent = currentState;
        guessesDiv.textContent=guesses;
        alreadyGuessedDiv.textContent=lettersGuessed;
        console.log("The new word is " + chosenWordArray);
        tallyDiv.textContent=("Wins: "+wins + " Losses: " + losses);
}

    // function startGame{


    // }
resetVariables();
    document.onkeyup = function (event) {


        // Determines which key was pressed.

        console.log(event.key);

        var userGuess = event.key;
        if (letters.indexOf(userGuess)!== -1){

        //First check if the letter has already been guessed.
        if (lettersGuessed.indexOf(userGuess) !== -1) {

            //If the letter has been guessed, tell the user.  Wait for next letter.
            console.log("You already guessed that. lettersGuessed is "+lettersGuessed + "user guess is + " + userGuess);

        } else {

            //If the letter is a new letter, first check if it's part of the word.

            var indexGuess = chosenWord.indexOf(userGuess);

            if (indexGuess === -1) {
                //If guess is not part of word, take away a guess.
                guesses = guesses - 1;
                guessesDiv.textContent=guesses;
                console.log("Guesses left: " + guesses);
                console.log("Wrong");
                lettersGuessed.push(userGuess);
                alreadyGuessedDiv.textContent=lettersGuessed;

            } else {
                //The letter is part of the word.

                //Need to check if the letter occurs more than once.
                for (var i=0; i<chosenWord.length; i++){
                    if (chosenWord[i]===userGuess){
                        currentState[i]=userGuess;
                        correctGuesses++;
                        console.log("current guess numbber is :" +correctGuesses);
                        // lettersGuessed.push(userGuess);
                    }
                }
                guessedWordDiv.textContent = currentState;

                console.log(currentState);

                if (correctGuesses >= chosenWord.length) {
                    guessedWordDiv.textContent="Winner";
                    wins++;
                    resetVariables();
                }
            }

            //Check if the user is out of guesses.
            if (guesses === 0) {
                console.log("You've lost.");
                losses++;
                resetVariables();
            }
        }
    }
    }
