import addGlobalEventListener from '/util-scripts/addGlobalEventListener.js'
//Have element the add button
const addBtn = document.querySelector('.submit')

//When one is pressed, it must be highlited, while others should not
const allBtn = document.querySelector('.filter-btn.all')
const notCompletedBtn = document.querySelector('.filter-btn.not-completed')
const completedBtn = document.querySelector('.filter-btn.completed')
//the class Active highlights any button
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



