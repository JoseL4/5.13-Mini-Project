let button = document.querySelector('button');
let result = document.querySelector('.result');
let input = document.querySelector('input');
let score = 0
let displayScore = document.querySelector(".score");


button.onclick = function() {
  let userInput = input.value;
  if (userInput == "Red") {
    result.innerHTML = "Red is your favorite color";
  } else if (userInput == "Yellow") {
    result.innerHTML = "Yellow is your favorte color";
  } else if (userInput == "Blue") {
    result.innerHTML = "Blue is your favorite color";
  } else {
    result.innerHTML = "Please pick between, red, yellow and blue."
  }
  score++
  displayScore.innerHTML = score;
}