//Nr pare de la 2-10 in chrome

let importId = document.getElementById("even");


for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        importId.innerHTML += i + "<hr>";
    }
}
console.log(even);

function nameF(parametru) {
   // body-ul functiei
   console.log("recapitulare functii");
}

//nameF (parametru);
//nameF (argument); // cand apelam functia parametrul se numeste argumente

// functii anonime recapitulare

var f = function () {

};

//call back = o funtie trecuta ca si argument al unei alte functii - interviu

//anonymous function, it does something
var f = function (a) {
    return a * 5;
  };
  //function, accepts a callback as an argument
  function go(n, f) {
    return f(n);
  }
  //calls the function
  go(10, f);

//variabile: local scop, global scop
var a = 2;
var b = 5;
var c = 10;
console.log(a, b, c); //2, 5, 10
function f() {
  var a = 99;
  var b = 999; //local variables override the global ones in the function
  c = 9999; //no "var" keyword, so we operate on a global c variable
  console.log(a, b, c); //99, 999, 9999
}
f();
console.log(a, b, c); //2, 5, 9999

//closure - interviu


class Flori {
    constructor (nume, culoare) {

        this.nume = nume;
        this.culoare = culoare;
    }
    getCuloare (){
        return this.culoare;
    }
    getNume (){
        return this.nume;
    }
}

let floare = new Flori("trandafir", "alb");
let denumire = new Flori ("bujor", "roz");


console.log(floare.getCuloare()); //alb
console.log(denumire.getCuloare()); //roz
console.log(denumire.getNume()); //bujor

//Exemplu:
class Vehicle {
    constructor(type, color) {
      this.type = type;
      this.color = color;
    }
    getColor() {
      return this.color;
    }
  }
  // Extindem clasa Vehicle
  class Car extends Vehicle {
    constructor(color, maxSpeed) {
      super("car", color);
      this.maxSpeed = maxSpeed;
    }
    getMaxSpeedFormatted() {
      return this.maxSpeed + "km/h";
    }
  }
  let car = new Car("blue", 200);
  console.log(
    "We have a " +
      car.getColor() +
      " car with a max speed of " +
      car.getMaxSpeedFormatted()
  );

  class CarW3 {
    constructor (name, year) {
        this.name = name;
        this.year = year;
    }
    age () { //metode = orice poate fii
        let date = new Date();
        return date.getFullYear() - this.year;
    }
  }

  let myCar = new CarW3 ("Ford", 2016);
  document.getElementById("classes").innerHTML = "My car is " + myCar.age() + " years old.";

//Ex1: cati ani are o persoana in prezent daca stim anul nasterii
class PastTime {
    constructor (name, year) {
        this.name = name;
        this.year = year;
    }
    age () {
        let date = new Date ();
        return date.getFullYear() - this.year;
    }
    who () {
        return this.name;
    }
}

let howOldYear = new PastTime ("Ion", 1966);
document.getElementById ("time").innerHTML = "In prezent " + howOldYear.who() + " are: "+ howOldYear.age() +" ani"

//Ex2: cati ani avea Andrei in anul x daca s-a nascut in anul y

class Varsta {
    constructor (anNastere, anCurent) {
        this.anNastere = anNastere;
        this.anCurent = anCurent;
    } //mai sus avem o clasa basic
    ani () {
        return this.anCurent - this.anNastere;
    }
}
let aniVarsta = new Varsta (1987, 1995); //am creat o variabila in care am adaugat un obiect
console.log(aniVarsta.ani()); //3

document.getElementById ("varsta").innerHTML = "Andrei avea " + aniVarsta.ani () + " in anul 1995";

//obiect in JS 06.09.22

const animal = {
    nume : "iepuras",
    culoare: "alb",
    id: 350,
    proprietati: function() {
        return this.nume + " " + this.culoare;
    }
};
console.log(animal.proprietati() + " - are id-ul " + animal.id);
document.getElementById ("iepuras").innerHTML = animal.proprietati()+ " - are id-ul " + animal.id


//variabila declarata cu const, const nu se suprascriu

const X = 7;
if (X == 7) {
    const X = 8;
    console.log(X); //8
} //same name, different scope
console.log(X); //7

//Hoisting
// declaram 3 variabile, sa le apelam inainet de console.log


//console.log(a);
// console.log(b);
// console.log(c);

//var a = "var";
//let b = "let";
//const c = "const";


//tipuri de functii: declaration, expression, arrow
console.log(declaration(3, 5)); //8 functia se hoistuieste
//console.log(expression(2, 4)); //sunt puse in variabile, variabila nu se hoistuieste error: initialization
//console.log(arrow(9,5)); //sunt puse in variabile, variabila nu se hoistuieste error: initialization


function declaration(a, b) {
return a + b;
}

let expression = function (a, b){
    return a + b;
}

const arrow = (a, b) => a + b;

//Recursion = recursivitate
//Recursiunea este atunci când un program se autoinvocă.
//Formează o buclă care poate fi nesfârșită, dacă nu stabilim anumite condiții de break.

function recursion(x) {
    console.log(x); //5 4 3 2 1 0
    if ( x > 0 ) {
        recursion(x - 1); //the function calls itself
    }
    console.log(x); //0 1 2 3 4 5 conditia pusa ptr a prevenii o bucla nesfarsita;
}

recursion(5);

function factorial(n) {
    if (n == 1 || n == 0)
        return 1;
    else 
        return n * factorial(n - 1)
}
console.log(factorial(4));
factorial(4);



//OBIECTE
//

// let userEx = {
//     "name": "John",
//     "age": 30
// };

// user.isAdmin = true; //adaugam o proprietat
// delete user.age; //stergere

//obiect gol
let user = {
};
//adaugam proprietate in obiectul gol
user.name = "Bea";
user.lastName = "Toth";
console.log(user);

user.name = "Laur";
console.log(user);

delete user.lastName;
console.log(user);

//obiect references and copyyng
let message = "Hello!";
console.log(message);

let phrase = message;
console.log(phrase);
message = "Hello word!";
phrase = "test"

console.log(message);
console.log(phrase);


let userNou = { name: "John" }
let adminNou = userNou;

adminNou.name = "Bogdan" 

console.log(userNou); //Bogdan
console.log(adminNou); //Bogdan

//JSON

let empl = {
    "employees" : [
        {
            "firsName": "Sandra",
            "lastName": "Putere"
        },
        {
            "firsName": "Bea",
            "lastName": "Toth"
        },
        {
            "firsName": "Tudor",
            "lastName": "Thomas"
        }
    ]
}
JSON.stringify(empl); //a devenit string
console.log(JSON.stringify(empl));

JSON.parse('{"employees":[{"firsName":"Sandra","lastName":"Putere"},{"firsName":"Bea","lastName":"Toth"},{"firsName":"Tudor","lastName":"Thomas"}]}')

