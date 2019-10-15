// created global Variable and arrays
var wordChoices = ["meatballs", "ikea", "chocolate"];
var selectWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // M _ _ _ _ _ _ _
var wrongLetters  = [];
console.log(wordChoices);
console.log(lettersinWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);



var wins = 0;
var loss = 0;
var guessesLeft = 9;

function startGame(){
  selectWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  lettersinWord = selectWord.split("");
  numBlanks = lettersinWord.length;


  // Reset
  guessesLeft = 9;
  wrongLetters= [];
  blanksAndSuccesses = [];

  for(var i = 0; i < numBlanks; i++){
  blanksAndSuccesses.push("_");
  }
  

};

// Create variables that hold references to the places in the HTML where we want to display things.
