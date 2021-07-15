/* Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe.
Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe,
guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio. */


var totalNumber = 100;
var totalBombs = 16;
var userChance = totalNumber - totalBombs;
var bombsNumber = [];
var userNumbers = [];
var gameOver = false;
var score = userNumbers.length;



// RandomNumber -> bombs array
while (bombsNumber.length < totalBombs) {
    var randomNumber = getRandomNumber(1, 100);
    console.log("Numero random: ", randomNumber)
    if (!isInArray(randomNumber, bombsNumber)) {
        bombsNumber.push(numberRandom);
    }
}
console.log("Array bombe: ", bombsNumber);

while (!gameOver && userNumbers.length < 5) {
    var chosenNumber = getUserNumber(1, 100);
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

if (gameOver) {
    alert("Hai perso! Punteggio raggiunto: " + score);
} else {
    alert("Hai vinto! Punteggio raggiunto:" + score);
}






