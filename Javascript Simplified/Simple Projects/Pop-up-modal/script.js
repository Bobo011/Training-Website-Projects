//1.Select all the classes
const openModalBtnEl = document.querySelector('.open-modal-btn')
const overlayEl = document.querySelector('.overlay')
const modalEl = document.querySelector('.modal')
const closeModalBtnEl = document.querySelector('.close-modal-btn')

//2.Create eventListener for the button

openModalBtnEl.addEventListener('click',()=>{
    //This displays the modal and the overlay
    overlayEl.classList.add('open')
    modalEl.classList.add('open')

    closeModalBtnEl.addEventListener('click',closeModal)

    overlayEl.addEventListener('click',closeModal)


    function closeModal(){
    overlayEl.classList.remove('open')
    modalEl.classList.remove('open')

}})
