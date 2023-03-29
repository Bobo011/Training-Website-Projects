//JAVASCRIPT CODE

document.addEventListener("DOMContentLoaded", () => {
  const task = document.querySelectorAll(".task");
  const containers = document.querySelectorAll(".tasks");

document.addEventListener('mouseover',e=>{
    if(e.target.matches('.task')){
        e.target.draggable=true
        e.target.classList.add('data-draggable')
    }
})

  function drag() {
    task.forEach((task) => {
      task.addEventListener("dragstart", (e) => {
        const id = e.target.getAttribute("data-draggable");
        e.dataTransfer.setData("text/plain", id);
        setTimeout(() => {
          e.target.classList.add("hide");
        }, 0);
      });
    });
  }
  

  function dropped() {
    containers.forEach((container) => {
      container.addEventListener("dragenter", dragEnter);
      container.addEventListener("dragover", dragOver);
      container.addEventListener("dragleave", dragLeave);
      container.addEventListener("drop", drop);
    });
  }

  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('hide')
    e.target.classList.add('dragging-over')
  }

  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('hide')
    e.target.classList.add('dragging-over')
  }

  function dragLeave(e) {
    e.target.classList.remove('hide')
    e.target.classList.remove('dragging-over')
  }

  function drop(e) {
    e.preventDefault();
    // get the draggable element
    const id = e.dataTransfer.getData("text/plain");
    const draggable = document.querySelector(`[data-draggable='${id}']`);
    // add it to the drop target
    e.target.querySelector(".tasks").appendChild(draggable);
    draggable.classList.remove("hide");
    e.target.classList.remove("hide");
    e.target.classList.remove("dragging-over");
  }
  

  drag();
  dropped();
});

//END OF CODE