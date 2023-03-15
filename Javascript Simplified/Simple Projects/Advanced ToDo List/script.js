const formEl =document.querySelector('#new-todo-form')
const todoInputEl =document.querySelector('#todo-input')
const listEl = document.querySelector('#list')
const templateEl = document.querySelector('#list-item-template')
//This will allow us to save todos in an array and javascript
const todos =[]

const LOCAL_STORAGE_PREFIX ='ADVANCED TO DO LIST-'
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`


//Add TODOS
//User will type in todo and click add todo button.
formEl.addEventListener('click',e=>{
    e.preventDefault()

    
    //takes the value of what is inputted in the input field
const todoName =todoInputEl.value
//This prevents renderToDo to append the template in case the input field is empty
if(todoName === ''){return}
todos.push(todoName)
saveTodos()
//Render Todo
renderToDo(todoName)
todoInputEl.value = ''

})



function renderToDo(todoName){
const templateClone = templateEl.content.cloneNode(true)
const textElement = templateClone.querySelector('[data-list-item-text]')
textElement.innerText = todoName
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
function loadTodos{
    
}
