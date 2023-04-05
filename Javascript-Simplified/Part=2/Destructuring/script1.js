import addGlobalEventListener from '/util-scripts/addGlobalEventListener.js'
//Have element the add button
const addBtn = document.querySelector('.submit')

//When one is pressed, it must be highlited, while others should not
const allBtn = document.querySelector('.filter-btn.all')
const notCompletedBtn = document.querySelector('.filter-btn.not-completed')
const completedBtn = document.querySelector('.filter-btn.completed')
//the class Active highlights any button
addGlobalEventListener('click','.filter-btn.all',e=>{
  console.log('clicked');
})
addGlobalEventListener('click','.filter-btn.not-completed',e=>{
  console.log('clicked');
})
addGlobalEventListener('click','.filter-btn.completed',e=>{
  console.log('clicked');
})




