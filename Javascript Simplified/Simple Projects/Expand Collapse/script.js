const addCardButtonEl = document.querySelector("#add-card");
const cardTemplateEl = document.querySelector("#card-template");
let titleNum = 5;

addCardButtonEl.addEventListener("click", () => {
  const newSection = cardTemplateEl.content.cloneNode(true);
  newSection.querySelector(".card-title").innerText = `Title ${titleNum}`;
  titleNum++;
  document.body.appendChild(newSection);
});

// add event listener to the expand/collapse button
document.addEventListener("click", (e) => {
  if (!e.target.matches(".expand-button")) return;
  const card = e.target.closest(".card");
  const cardBody = card.querySelector(".card-body");
  cardBody.classList.toggle("show");
  e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand";
});
