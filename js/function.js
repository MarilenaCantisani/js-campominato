//TODO Function that generates a random number 
function getRandomNumber(min, max) {
    return numberRandom = Math.floor(Math.random() * (max - min + 1) + min);
}

//TODO Function that controls the inclusion of an element in an array 
function isInArray(needle, haystack) {
    var found = false;
    var i = 0;
    while (i < haystack.length && !found) {
        if (needle === haystack[i]) {
            found = true;
        }
        i++;
    }
    return found;
}
//TODO Function that checks the validity of the entered number
function getUserNumber(min, max) {
    do {
        var num = prompt("Dimmi un numero da " + min + " a " + max);
    } while (!isANumber(num) || num < min || num > max) {
    }
    return parseInt(num);
}

//TODO Function confirming that the inserted element is a number 
function isANumber(num) {
    if (!num || num.trim() === "" || isNaN(num)) {
        return false;
    } else {
        return true;
    }
}