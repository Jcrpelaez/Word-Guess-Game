// Global Variable and arrays
var wordChoices = ["meatballs","ikea","chocolate"];
var randomIndex = 0; //Change to be random index later, hardcoded to meatball
var compChoice = wordChoices[randomIndex];
var selectedWord = "";
var targetWordArray = compChoice.split(""); //Splits the word into individual letters
var wrongLetters = [];
var numBlanks = 0;
console.log(compChoice); //the word the computer chose
console.log(targetWordArray); 
console.log(numBlanks)
// Game counter
var wins= 0;
var loss= 0;
var guessesLeft = 9;

document.onkeyup = function(event) {
  var userLetter = event.key.toLowerCase(); //Forces all to be lowercase in our comparisons
  console.log(userLetter);

  // if the userLetter is in the word
  if (targetWordArray.indexOf(userLetter) != -1) {
    console.log("User letter is in the word!");
  }
};
