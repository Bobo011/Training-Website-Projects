const formEl =document.querySelector('#new-todo-form')
const todoInputEl =document.querySelector('#todo-input')
const listEl = document.querySelector('#list')
const templateEl = document.querySelector('#list-item-template')
const LOCAL_STORAGE_PREFIX ='ADVANCED TO DO LIST-'
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
//This will allow us to save todos in an array and javascript
const todos =loadTodos()
todos.forEach(renderTodo)

listEl.addEventListener('change',e =>{
    if(!e.target.matches('[data-list-item-checkbox]')){return}

    //Get the todo that is clicked on
    //toggle the complete property to be equal to the checkbox value
    //save updated todo
})




//Add TODOS
//User will type in todo and click add todo button.
formEl.addEventListener('click',e=>{
    e.preventDefault()

    
    //takes the value of what is inputted in the input field
const todoName =todoInputEl.value
//This prevents renderToDo to append the template in case the input field is empty
if(todoName === ''){return}
const newTodo= {
    name:todoName,
    complete:false,
    id:new Date().valueOf().toString()
}

todos.push(newTodo)
//Render Todo
renderTodo(newTodo)
saveTodos()
todoInputEl.value = ''

})



function renderTodo(todo){
const templateClone = templateEl.content.cloneNode(true)
//This gives a unique id to every newly created Todo list item
const listItemEl = templateClone.querySelector('.list-item')
listItemEl.dataset.todoId = todo.id


const textElement = templateClone.querySelector('[data-list-item-text]')
textElement.innerText = todo.name
listEl.appendChild(templateClone)

}

//This should then add the todo to the list above.

//Save TODOS

function saveTodos(){
localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}


//Delete TODOS
//Complete Todos

//Load Todos
function loadTodos(){
    //gets the storage key and converts to a string
const todoString = localStorage.getItem(TODOS_STORAGE_KEY)
return JSON.parse(todoString) || []

}
