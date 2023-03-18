let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button')); //preluare prin array

console.log(buttons);

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = ''; //cand apasam 'C' se sterge display-ul insa ramana litera 'C' daca nu punem 'break'
            break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1); // cand se da click pe '←' se sterge ultimul element
                }   
            break;
            case '=':
                try{display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!'; //daca se introduce '+','*','/' si se apasa '='... se efiseaza 'Error!'
                }
                break
            default:
                display.innerText += e.target.innerText;
        }
    })
})