
const submitButton = document.getElementById("btnSubmit");
const clearButton = document.getElementById("btnClear");
const tasks = document.getElementById("tasks");
const messageElement = document.getElementById("message");

submitButton.addEventListener("click", addTask); //la click buton "Submit" ==>executa functia addTask
clearButton.addEventListener("click", clearList); // se sterg elementele din lista
tasks.addEventListener("click", handleTaskClick); //se taie textul din lista functia handleTaskClick

displayMessage("Lista de cumparaturi este goala!"); //sau
//const greetingMessage = "Good, you have no tasks today!"
//displayMessage(greetingMessage);


//pentru a curata lista noastra
function clearList() {
    const taskList = tasks.getElementsByClassName("list-group-item");
    while (taskList.length > 0) {
        taskList[0].parentNode.removeChild(taskList[0]); //strege tot timpul primul element din lista, tot cate unul
    }
    displayMessage("Lista de cumparaturi este goala!");
}


//task listul sa se taie daca am efectuat lista
function handleTaskClick(event) {
    const style = event.target.style;
    if (!style.textDecoration) { //*
        style.textDecoration = "line-through";
    } else {
        style.textDecoration = "";
    }
}
//daca am taiat din greseala si vrem sa anulam taierea: vezi if-ul si else adaugat *


//1. prima functionalitate = adaugare noi taskuri
function addTask() {
    const newTask = document.getElementById("newTask");
    if (inputIsValid(newTask.value)) { //nu ne lasa sa adaugam taskuri goale
        tasks.innerHTML += `<li class="list-group-item">${newTask.value}</li>`;//sau' + newTask.value + '</li>` //construim inputul/lista
        newTask.value = ""; //daca este valid se sterge textul din casuta input, ca sa putem adauga noi taskuri
        messageElement.style.visibility = "hidden";
    } else {
        displayMessage("Nu ai adaugat nimic in lista!");
    }
}
//in cazul in care nu scriem nimic in input vrem sa se afiseze un mesaj: vezi else


function displayMessage(message) {
    messageElement.innerText = message;
    messageElement.style.visibility = "visible";

}


//ca sa nu putem adauga taskuri goale:
function inputIsValid(input) {
    if (input) { //verifica sa nu fie null, undefined...
        return true;
    }
    return false;
}
//dupa care functia adaugam in functia addTask










