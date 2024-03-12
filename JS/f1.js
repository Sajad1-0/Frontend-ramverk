import {addition, subtraction} from './module.js';

document.addEventListener('DOMContentLoaded', function () {

    const btn = document.getElementById('clickBtn');
    btn.addEventListener('click', () => {
        console.log('Addition', addition(3, 8));
        console.log('subtraction', subtraction(3, 8));
    })
})


// lEKTION 1 
// Uppgift 1 && 2: Definiera en klass, konstruktor och this nyckelordet 

class Person {
    constructor (namn, ålder, yrke) {
        this.namn = namn;
        this.ålder = ålder;
        this.yrke = yrke;
    }

    introducera () {
        console.log(`Hej, jag heter ${this.namn}, jag är ${this.ålder} år gammal och jag är ${this.yrke}`);
    }
}

// uppgift 3: Skapa och Använda Instanser  
const person1 = new Person('Sajjad', 24, 'developer');
const person2 = new Person('Mohsen', 25, 'lagermedarbetare');
// person1.introducera();
// person2.introducera();

// uppgift 4 & 5: Implementera Arv och Användning av super 
class Student extends Person {
    constructor (namn, ålder, yrke, kurs) {
        super(namn, ålder, yrke); // Anropa kontruktoren i person med 'namn'
        this.kurs = kurs; // lägger till ny information om personen
    }

    introducera () {
        console.log(`Hej, jag heter ${this.namn}, jag är ${this.ålder} år gammal och jag är ${this.yrke}
        och just nu går jag ${this.kurs} kursen`);
    }
}

const person3 = new Student('Sajjad', 24, 'developer', 'Avancerad JavaScript');
person3.introducera();


// uppgift 6 : Prototyper och prototypkedjan
function Djur(art, name) {
    this.art = art;
    this.name = name;
}

Djur.prototype.ljud = function () {
    console.log(`${this.name} säger ${this.art}`);
}

const djur1 = new Djur('afff afff', 'hund')
const djur2 = new Djur('mjau', 'katt');
djur1.ljud();
djur2.ljud();

//Uppgift 7 : Utforska Prototypkedjan 


