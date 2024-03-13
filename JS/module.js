export function addition (a,b) {
    return a + b;
}

export function subtraction (a,b) {
    return a - b;
}



// Frontend ramverk Lektion 1 
// Uppgift 1: Skapa och Använda JavaScript-moduler
// 1. Grundläggande moduler: Skapa en modul (module.js) som exporterar två funktioner
// En för att vända en sträng och en annan för att konvertera en sträng till uppercase
// function som vända på en string
function reverseString (str) {
    // let splitString = str.split('');
    // let reverseString = splitString.reverse();
    // let joinString = reverseString.join('');

    // Or we write the code in one line
    return str.split('').reverse().join('');
}

//Function för att konvertera en sträng till lowercase
function toUpperCase (str) {
    return str.toUpperCase();
}

export default {
    reverseString,
    toUpperCase
};