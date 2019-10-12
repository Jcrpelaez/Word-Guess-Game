var wordChoices = ["apple", "banana", "watermelon", "tacos"];
var randomIndex = 0; //Change to be random index later, hardcoded to apple for now
var compChoice = wordChoices[randomIndex];

console.log(compChoice); //the word the computer chose

var targetWordArray = compChoice.split(""); //Splits the word into individual letters

document.onkeyup = function(event) {
  var userLetter = event.key.toLowerCase(); //Forces all to be lowercase in our comparisons
  console.log(userLetter);

  // if the userLetter is in the word
  if (targetWordArray.indexOf(userLetter) != -1) {
    console.log("User letter is in the word!");
  }
};
