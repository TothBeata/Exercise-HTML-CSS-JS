//create random number
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
console.log(num1) // random number <9 ...3,5,6,8,1...etc

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const correctEl = document.getElementById("correct");
const inCorrectEl = document.getElementById("incorrect");
const scoreEl = document.getElementById("score");


//let score = JSON.parse(localStorage.getItem("score"));
let correct = JSON.parse(localStorage.getItem("correct"));
let incorrect = JSON.parse(localStorage.getItem("incorrect"));

if (!score) {
    score = 0;
}

if (!correctEl) {
    correctEl = 0;
}

correctEl.innerText = `Correct: ${correct}`
inCorrectEl.innerText = `Incorrect: ${incorrect}`
scoreEl.innerText = `SCORE ${correct + incorrect}`


questionEl.innerText = `What is ${num1} X ${num2}?`

const correctAns = num1 * num2;

//addEventListener metode
formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value //'+' = din string va fii number
    if (userAns === correctAns) {
        correct++;
        upDateLocalStorage();
    } else {
        incorrect--;
        upDateLocalStorage();
    }
});

function upDateLocalStorage() {
    localStorage.setItem("correct", JSON.stringify(correct));
    localStorage.setItem("incorrect", JSON.stringify(incorrect));
}