const formEl =document.querySelector('#new-todo-form')
const todoInputEl =document.querySelector('#todo-input')
const listEl = document.querySelector('#list')
const templateEl = document.querySelector('#list-item-template')

//Add TODOS
//User will type in todo and click add todo button.
formEl.addEventListener('click',e=>{
    e.preventDefault()
    //takes the value of what is inputted in the input field
const todoName =todoInputEl.value
//Render Todo
renderToDo(todoName)
todoInputEl.value = ''

})



function renderToDo(todoName){
const templateClone = templateEl.content.cloneNode(true)
console.log(templateClone);

}
renderToDo()
//This should then add the todo to the list above.




//Delete TODOS
//Complete Todos
//Save TODOS
//Load Todos

