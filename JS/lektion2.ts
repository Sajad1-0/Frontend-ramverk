// lektion 2 
// Uppgift 1: Konvertera och korrigera calculateArea 


// function calculateArea (width, height) { return width * height; }
// skriv om funktionen i TypeScript så att den enbart accepterar numeriska argument.
// funktionen ska tydligt ange att den returnerar ett nummer
function calculateArea(width: number, height: number) : number {
    return width * height;
}
console.log(calculateArea(2, 5)); // ger rätt svar 
console.log(calculateArea(3, 5)); // kompilatorfel

