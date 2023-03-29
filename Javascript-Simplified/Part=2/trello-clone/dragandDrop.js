import addGlobalEventListener from "../../../util-scripts/addGlobalEventListener.js";


export default function setup(){
    addGlobalEventListener('mousedown','[data-draggable]', e =>{
    const mouseMoveFunction = ()=>{
        console.log('move');
    }
document.addEventListener('mousemove',mouseMoveFunction)

        })
}

