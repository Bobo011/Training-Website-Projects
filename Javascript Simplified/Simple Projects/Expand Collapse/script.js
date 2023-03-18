const addCardButtonEl = document.querySelector('#add-card');
const cardTemplateEl = document.querySelector('#card-template');
const addCardBtnEl = document.querySelector('#add-card')
const cardEl = document.querySelector('.card')

addCardBtnEl.addEventListener('click',()=>{
  const newSection = cardEl.cloneNode(true);
			document.body.appendChild(newSection);

})



// add event listener to the expand/collapse button
document.addEventListener("click", e => {
  if (!e.target.matches(".expand-button")) return;
  const card = e.target.closest(".card");
  const cardBody = card.querySelector(".card-body");
  cardBody.classList.toggle("show");
  e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand";
});
