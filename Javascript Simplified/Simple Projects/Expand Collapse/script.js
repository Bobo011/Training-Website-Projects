const cardEl =document.querySelector('.card')
const expandButtonEl = document.querySelectorAll('.expand-button')
const cardBodyEl =document.querySelectorAll('.card-body')

//Use can press the expand button which will hide or show the text
//When the button is pressed a show class must be added to cardbodyEl


expandButtonEl.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (button.innerText === 'Expand') {
        button.innerText = 'Collapse'
        cardBodyEl[index].classList.add('show')
      } else {
        button.innerText = 'Expand'
        cardBodyEl[index].classList.remove('show')
      }
    })
  })



  // document.addEventListener("click", e => {
  //   if (!e.target.matches(".expand-button")) return
  
  //   const card = e.target.closest(".card")
  //   const cardBody = card.querySelector(".card-body")
  
  //   cardBody.classList.toggle("show")
  //   if (e.target.innerText === "Expand") {
  //     e.target.innerText = "Collapse"
  //   } else {
  //     e.target.innerText = "Expand"
  //   }
  //   // e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand"
  // })
  