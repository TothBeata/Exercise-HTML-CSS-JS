const clape = document.querySelectorAll(".key");
const calmMusic = document.querySelector('#btnMusik');


function playMusik() {
    var audio = new Audio('./sounds/Calm-and-Peaceful.mp3').play();

}
calmMusic.addEventListener('click', playMusik());


//functie de creare audi + play

//fiecare clapa va avea atasat un event de click -> care imi va chema functia ptr play
function playSounds(url) {
    new Audio(url).play();
}

clape.forEach((clapa, i) => {
    const soundNumber = i < 9 ? '0' + (i + 1) : (i + 1) //'0' + (i + 1) = concateneaza 01 02 03 04 05
    const soundUrl = 'sounds/key' + soundNumber + '.mp3' //cale fisier
    clapa.addEventListener('click', () => playSounds(soundUrl));
})



