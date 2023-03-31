import addGlobalEventListener from "../../../util-scripts/addGlobalEventListener.js";

export default function setup() {
    
  addGlobalEventListener("mousedown", "[data-draggable]", (e) => {
    const selectedItem = e.target
    const itemClone = selectedItem.cloneNode(true)
    const ghost = selectedItem.cloneNode()
    const offset = setupDragItems(selectedItem,itemClone,ghost, e)
    setupDragEvents(selectedItem,itemClone,ghost,offset)
    
  });
  
}

function setupDragItems(selectedItem,itemClone,ghost, e){
//get the rectangle dimentions
const originalRect = selectedItem.getBoundingClientRect()
const offset ={
    x:e.clientX - originalRect.left,
    y:e.clientY - originalRect.top
}
selectedItem.classList.add('hide')
//Item stays the same width without shrinking
itemClone.style.width = `${originalRect.width}px`
itemClone.classList.add('dragging')
positionClone(itemClone, e, offset)
document.body.append(itemClone)
//GHOST
ghost.style.height = `${originalRect.height}px`
ghost.classList.add('ghost')
ghost.innerHtml = ''
selectedItem.parentElement.insertBefore(ghost,selectedItem)
return offset

}


function setupDragEvents(selectedItem,itemClone,ghost,offset){
      //MOUSE MOVE
      const mouseMoveFunction = (e) => {
        const dropZone =getDropZone(e.target)
        positionClone(itemClone, e, offset)
        if(dropZone == null) return
        dropZone.append(ghost)
      };
      document.addEventListener("mousemove", mouseMoveFunction);
      //MOUSE UP
      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", mouseMoveFunction);
          stopDrag(selectedItem,itemClone,ghost)
        },
        { once: true }
      );
}

function positionClone(itemClone,mousePosition,offset){
itemClone.style.top =`${mousePosition.clientY - offset.y}px`
itemClone.style.left =`${mousePosition.clientX - offset.x}px`
}


function stopDrag(selectedItem,itemClone,ghost){
    selectedItem.classList.remove('hide')
    itemClone.remove()
    ghost.remove()
}


function getDropZone(element){
if(element.matches('[data-drop-zone]')){
  return element
}else {
  return element.closest('[data-drop-zone]')
}
}