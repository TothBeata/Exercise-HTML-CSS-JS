const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    /*
    //sau
    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }
    */

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(() => {
        updateClock() //se apeleaza functia la 1000 milisecunde = arata secundele in timp real
    }, 1000)

}

updateClock();
