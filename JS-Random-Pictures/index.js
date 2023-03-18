// 1. Afisam o imagine, oricare din alea 10.
// 2. Folosim un timer pentru a executa o functie la un anumit interval
// ex: din 2 in 2 sec
//3. Trebuie sa generam un random


function generateNumber() {

    let randomNumber = Math.floor(Math.random() * 10) + 1;   //generat nr.random
    console.log(randomNumber);
    // change image in html
    const imgRef = document.querySelector("img");
    imgRef.src = `./assets_Photo/${randomNumber}.jpg`;



}
//generateNumber();

function changeNumber() {
    setInterval(generateNumber, 1000);
}
changeNumber();





// function display() {
//     console.log('Check')
// }

// function display2() {
//     console.log('Check2')
// }


// function test() {
//     setInterval(display, 1000);
// }


// function test2() {
//     setTimeout(display2, 1000);
// }

// test();
// test2();



