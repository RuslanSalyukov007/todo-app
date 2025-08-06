const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');


todoForm.addEventListener('submit', addTask)

// Function addTask

function addTask(event) {
    event.preventDefault()

    if(todoInput.value === '') {
        alert ('You must write something')
    } else {
        let li = document.createElement('li');
        li.innerText = todoInput.value;
        todoList.appendChild(li);

        const deleteBtn = document.createElement('img');
        deleteBtn.setAttribute('src', './img/svgicons/delete-btn.svg');
        deleteBtn.style['margin-left'] = 'auto' 
        li.appendChild(deleteBtn);
    }
    todoInput.value = ''
    todoInput.focus()
    saveData()
}

todoList.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle("checked") 
        saveData()
    }
    else if (event.target.tagName === 'IMG') {
        event.target.parentElement.remove()
        saveData()
    }
},false)


// LocalStorage Save

function saveData() {
    localStorage.setItem("data", todoList.innerHTML)
}

function showTask() {
    todoList.innerHTML = localStorage.getItem("data");
}

showTask()
