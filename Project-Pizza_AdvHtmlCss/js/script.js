
function toggleVideoState() {
    var video = document.getElementById("home-bg-video");
    var btn = document.getElementById("home-video-btn");
    console.log(btn);
    if (video.paused) {
        video.play();
        btn.innerHTML = "<i class='fa-solid fa-pause'></i>";
    } else {
        video.pause();
        btn.innerHTML = "<i class='fa-solid fa-play'></i>";
    }
}

/*
var myElement = document.getElementById("div1");
var list = document.getElementsByName("sone_name");
var list = document.getElementsByTagName("div");
var list = document.getElementsByClassName("klasa");
*/


const modal = document.getElementById('modal-login_register');
function showModal(pageName) {
    modal.style.display='block';
    handleLoginRegisterVisibility(pageName);
}

function handleLoginRegisterVisibility(pageName) {
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    if (pageName === 'login') {
        formLogin.style.display='block';
        formRegister.style.display='none';
    } else if (pageName === 'register'){
        formLogin.style.display='none';
        formRegister.style.display='block';
    }
}

function hideModal() {
    modal.style.display='none';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}