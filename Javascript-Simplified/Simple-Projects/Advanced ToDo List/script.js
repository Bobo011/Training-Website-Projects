const formEl =document.querySelector('#new-todo-form')
const todoInputEl =document.querySelector('#todo-input')
const listEl = document.querySelector('#list')
const templateEl = document.querySelector('#list-item-template')
const LOCAL_STORAGE_PREFIX ='ADVANCED TO DO LIST-'
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
//This will allow us to save todos in an array and javascript
let todos =loadTodos()
todos.forEach(renderTodo)

listEl.addEventListener('change',e =>{
    if(!e.target.matches('[data-list-item-checkbox]')){return}

    
    const parent = e.target.closest('.list-item')
    const todoId = parent.dataset.todoId
    const todo = todos.find(td=>td.id=== todoId)
    todo.complete = e.target.checked
    saveTodos()
})


listEl.addEventListener('click',e=>{
    if(!e.target.matches('[data-button-delete]')){return}
const parent = e.target.closest('.list-item')
const todoId = parent.dataset.todoId
parent.remove()

todos = todos.filter(todo=> todo.id !== todoId)

saveTodos()

})


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

const checkbox = templateClone.querySelector('[data-list-item-checkbox]')
checkbox.checked =todo.complete

listEl.appendChild(templateClone)

}


function saveTodos(){
localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}

function loadTodos(){
    //gets the storage key and converts to a string
const todoString = localStorage.getItem(TODOS_STORAGE_KEY)
return JSON.parse(todoString) || []

}
