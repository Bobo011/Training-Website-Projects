document.addEventListener("DOMContentLoaded", () => {
  const task = document.querySelectorAll(".task");
  const containers = document.querySelectorAll(".tasks");

  function drag() {
    document.addEventListener("mouseover", (event) => {
      if (event.target.matches(".task")) {
        event.target.setAttribute("draggable", true);
        
        document.addEventListener("dragstart", (e) => {
        
            e.dataTransfer.setData("text/plain", e.target.id);
            setTimeout(() => {
              e.target.classList.add("hide");
            }, 0);
          });
      }
      
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
    e.target.classList.remove('hide')
    e.target.classList.remove('dragging-over')
  }

  drag();
  dropped();
});
