
var totalNumber;
var totalBombs = 16;
var bombsNumber = [];
var userNumbers = [];
var gameOver = false;
var difficultyLevel = ["facile", "normale", "difficile"];


var difficultyChosen = prompt("Scegli il livello di difficoltà: 'facile', 'normale', 'difficile'");

switch (difficultyChosen.toLocaleLowerCase().trim()) {
    case "facile":
        totalNumber = 100;
        break;
    case "difficile":
        totalNumber = 50;
        break;
    default:
        totalNumber = 80;
}
var userChance = totalNumber - totalBombs;

while (bombsNumber.length < totalBombs) {
    var randomNumber = getRandomNumber(1, 100);
    console.log("Numero random: ", randomNumber)
    if (!isInArray(randomNumber, bombsNumber)) {
        bombsNumber.push(numberRandom);
    }
}
console.log("Array bombe: ", bombsNumber);

while (!gameOver && userNumbers.length < userChance) {
    var chosenNumber = getUserNumber(1, totalNumber);
    if (isInArray(chosenNumber, bombsNumber)) {
        gameOver = true;
    } else {
        if (isInArray(chosenNumber, userNumbers)) {
            alert("Numero già inserito, scegli un altro numero!");
        } else {
            userNumbers.push(chosenNumber);
        }
    }
}
console.log("Numeri utente :", userNumbers);

var score = userNumbers.length;
if (gameOver) {
    alert("Hai perso! Punteggio raggiunto: " + score);
} else {
    alert("Hai vinto! Punteggio raggiunto:" + score);
}








