const todoButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')
const filterToDo = document.querySelector('.filter-todo')

todoButton.addEventListener("click", addTodoItemToList); //punem click pe button
todoList.addEventListener("click", deleteTodoItemFromList);
filterToDo.addEventListener("click", filterToDoList);

function addTodoItemToList(event) {
    console.log('addTodoItemToList');
    //submit = vreau sa bochez comportamentul default (sa nu faca refresh)
    event.preventDefault();
    //console.log(event);

    //injectare lista/element
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo") //adaugam class pe div 
    //console.log(todoDiv); //<div></div>
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    // Save to local storage

    newTodo.classList.add('todo-item');


    todoInput.value = ' ';

    //cream elementul button si injectam html
    const completeButton = document.createElement('button');
    completeButton.innerHTML = `<i class="fas fa-check"></li>`
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fas fa-trash"></li>`
    deleteButton.classList.add("trash-btn");
    todoDiv.appendChild(deleteButton);



    todoDiv.appendChild(newTodo);
    todoList.appendChild(todoDiv);
}

function deleteTodoItemFromList(event) {
    const clickedElem = event.target;
    if (clickedElem.classList[0] === 'trash-btn') {
        event.target.parentElement.remove();

    }
}

function filterToDoList(event) {
    console.log(event.target.value);
    //lista.array.forEach(element => {...});

    switch (event.target.value) {
        case "all":
            //faci ce vrei ti in JS
            break;
        case "completead":
            //faci ce vrei ti in JS
            break;
        case "uncompleated":
            //faci ce vrei ti in JS
            break;
    }

}