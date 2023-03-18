const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

function moveBg() {
    container.classList.toggle("change");
}

signUpBtn.addEventListener("click", moveBg);



/* SAU in loc de function moveBg()
signUpBtn.addEventListener("click", () => {
    container.classList.toggle("change");
});
*/

