/* Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe.
Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe,
guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio. */

//? #1: Creare un array per contenere le nostre bombe;
//? #2: Generare numeri random da inserire nell'array di bombe finchè non arrivo a 16 numeri; 
//? #3: Creare un array che conterrà i numeri scelti dall'utente;

//? #4: Chiedere al giocatore un numero; 
//? #5: Controllo se è un numero già presente nell'array dei numeri scelti --> se è già presente continuo a chiedere;
//? #5: Controllo se il numero scelto è all'interno dell'array di bombe --> se è presente la partita termina;
//? #6: Se il numero non è presente in entrambi gli array lo sggiungo all'array di numeri scelti dall'utente

//? #7: Stampare il messaggio "Game over";
//? #8: Comunicare all'utente il punteggio raggiunto; 
//? #9: Ricominciare il gioco. 

// Array bombe
const bombsNumber = [];
console.log("Array bombs: ", bombsNumber);

// Numeri random array bombe
while (bombsNumber.length < 16) {
    const numberRandom = Math.floor(Math.random() * (101 - 1) + 1);
    console.log(numberRandom);
    if (!bombsNumber.includes(numberRandom)) {
        bombsNumber.push(numberRandom);
    }
}
console.log(bombsNumber);

// Array numeri utente 
const userNumbers = [];

// Numeri utente 
var gameOver = false;
var score = 0;
while (userNumbers.length < 4 && !gameOver) {

    const chosenNumber = parseInt(prompt("Dimmi un numero da 1 a 100"));
    console.log("Numero scelto dall'utente: ", chosenNumber);

    if (userNumbers.includes(chosenNumber)) {
        alert("Numero già inserito! scegli un altro numero da 1 a 100");
    } else {
        userNumbers.push(chosenNumber);
    }

    if (isInArray(chosenNumber, bombsNumber)) {
        alert("Game over!");
        gameOver = true;
    } else {
        score++;
    }
}
console.log(userNumbers);


function isInArray(myelement, myarray) {
    let result = false;
    var i = 0;
    while (i < myarray.length && !result) {
        if (myelement === myarray[i]) {
            result = true;
        }
        i++;
    }
    return result;
}

