const inputEl = document.querySelector('#text-input');
const submitBtnEl = document.querySelector('button');
const listEl = document.querySelector('#list');

submitBtnEl.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the input value
  const inputValue = inputEl.value;

  // Create a new list item element
  const listItemEl = document.createElement('div');
  listItemEl.classList.add('list-item');
  listItemEl.textContent = inputValue;

  // Add an event listener to remove the list item element when it's clicked
  listItemEl.addEventListener('click', () => {
    listItemEl.remove();
  });

  // Append the new list item element to the list
  listEl.appendChild(listItemEl);

  // Clear the input field
  inputEl.value = '';
});
