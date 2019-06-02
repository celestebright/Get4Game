// $(document).ready(() => {
// These are my global variables
let scoreCounter = 0;
let yourScore = $('p.number').html(scoreCounter);

// This is to pick a random number for the boys head
let boyNumber = Math.floor(Math.random() * 50);
console.log(boyNumber);
$('p.idea').html(boyNumber);

// These are for the actual game buttons you click
$('button.firstStar').on('click', calculateScores ())
$('button.secondStar').on('click', calculateScores ())
$('button.thirdStar').on('click', calculateScores ())
$('button.fourthStar').on('click', calculateScores ())

addScore = function () {

}
checkScore = function () {

}
updateScore = function () {

}
resetRandomNumber = function () {

}

calculateScores = function () {
    addScore();
    checkScore();
    updateScore();
}

// });
