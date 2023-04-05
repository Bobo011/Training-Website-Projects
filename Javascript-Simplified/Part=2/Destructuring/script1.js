// JAVSCRIPT CODE
import addGlobalEventListener from '/util-scripts/addGlobalEventListener.js'
//element for the add button
const addBtn = document.querySelector('.submit')
const toDoList = document.querySelector('#todo-list')

addGlobalEventListener('click','.submit', e=>{
  e.preventDefault()
  //input
const input = document.querySelector('#todo-input')
let inputData = input.value
//Create a new list Item with a button
const newListItem = document.createElement('li')
const newListBtn = document.createElement('button');

newListItem.innerText = inputData
newListBtn.classList.add('delete-btn',)
newListBtn.innerText = 'Delete';
//Appends the delete button
newListItem.appendChild(newListBtn);
toDoList.appendChild(newListItem);
//Deletes the list item
addGlobalEventListener('click', '.delete-btn', (e) => {
  const listItem = e.target.parentElement;
  listItem.remove();
});

  // Clear the input field
  input.value = ''

})


function initializeFilterButtons() {
  // Elements for filter Buttons
  const allBtn = document.querySelector('.filter-btn.all')
  const notCompletedBtn = document.querySelector('.filter-btn.not-completed')
  const completedBtn = document.querySelector('.filter-btn.completed')
  
  // The class Activate highlights any button
  addGlobalEventListener('click','.filter-btn.all',e=>{
    activate(allBtn)
  })
  addGlobalEventListener('click','.filter-btn.not-completed',e=>{
    activate(notCompletedBtn)
  })
  addGlobalEventListener('click','.filter-btn.completed',e=>{
    activate(completedBtn)
  })

  function activate(element){
    allBtn.classList.remove('active')
    notCompletedBtn.classList.remove('active')
    completedBtn.classList.remove('active')

    element.classList.add('active')
  }
}



initializeFilterButtons();


// END OF CODE

