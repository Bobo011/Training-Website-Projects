//JAVASCRIPT CODE
import addGlobalEventListener from "/util-scripts/addGlobalEventListener.js";

const toDoList = document.querySelector("#todo-list");



addGlobalEventListener("click", ".submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("#todo-input");
  let inputData = input.value;
  const newListItem = document.createElement("li");
  const separator = document.createElement("div");
  const completeNewListBtn = document.createElement("button");
  const deleteNewListBtn = document.createElement("button");

  if (!inputData) {
    return;
  }
  newListItem.innerText = inputData;
  function addClassesAndText() {
    deleteNewListBtn.classList.add("delete-btn");
    deleteNewListBtn.innerText = "Delete";
    completeNewListBtn.classList.add("complete-btn");
    completeNewListBtn.innerText = "Completed";
    separator.classList.add("separate");
  }
  addClassesAndText();
  function appendItems() {
    newListItem.appendChild(separator);
    newListItem.appendChild(completeNewListBtn);
    newListItem.appendChild(deleteNewListBtn);
    toDoList.appendChild(newListItem);
  }
  appendItems();

   // Save data to local storage
   let data = JSON.parse(localStorage.getItem("toDoList")) || [];
   data.push(inputData);
   localStorage.setItem("toDoList", JSON.stringify(data));
  deleteButton();
  completeButton();
  function completeButton() {
    addGlobalEventListener("click", ".complete-btn", (e) => {
      const listItem = e.target.parentElement;
      if (!listItem.classList.contains("completed-item")) {
        // If the item has not been completed, complete the item
        listItem.style.backgroundColor = "#007bff";
        listItem.classList.add("completed-item");
        listItem.classList.remove("not-completed-item");
      } else {
        // If the item has already been completed, mark it as not completed
        listItem.style.backgroundColor = "transparent";
        listItem.classList.remove("completed-item");
        listItem.classList.add("not-completed-item");
      }
    });
  }
  

  input.value = "";
});

function initializeFilterButtons() {
  const allBtn = document.querySelector(".filter-btn.all");
  const notCompletedBtn = document.querySelector(".filter-btn.not-completed");
  const completedBtn = document.querySelector(".filter-btn.completed");

  addGlobalEventListener("click", ".filter-btn.all", (e) => {
    activate(allBtn);
    showAllListItems();
  });

  addGlobalEventListener("click", ".filter-btn.not-completed", (e) => {
    activate(notCompletedBtn);
    showNotCompletedListItems();
  });

  addGlobalEventListener("click", ".filter-btn.completed", (e) => {
    activate(completedBtn);
    showCompletedListItems();
  });

  function activate(element) {
    allBtn.classList.remove("active");
    notCompletedBtn.classList.remove("active");
    completedBtn.classList.remove("active");

    element.classList.add("active");
  }

  function showAllListItems() {
    const listItems = document.querySelectorAll("#todo-list li");
    listItems.forEach((item) => {
      item.style.display = "flex";
    });
  }

  function showNotCompletedListItems() {
    const listItems = document.querySelectorAll("#todo-list li");
    listItems.forEach((item) => {
      if (!item.classList.contains("completed-item")) {
        item.style.display = "flex";
        item.classList.add("not-completed-item");
      } else {
        item.style.display = "none";
        item.classList.remove("not-completed-item");
      }
    });
  }

  function showCompletedListItems() {
    const listItems = document.querySelectorAll("#todo-list li");
    listItems.forEach((item) => {
      if (item.classList.contains("completed-item")) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }
}

initializeFilterButtons();

function deleteButton() {
  addGlobalEventListener("click", ".delete-btn", (e) => {
    const listItem = e.target.parentElement;
    listItem.remove();
       // Remove data from local storage
    let data = JSON.parse(localStorage.getItem("toDoList")) || [];
    const listItemText = listItem.firstChild.textContent;
    const index = data.indexOf(listItemText);
    if (index > -1) {
    data.splice(index, 1);
}
    localStorage.setItem("toDoList", JSON.stringify(data));
  });

  

}



//END OF CODE
