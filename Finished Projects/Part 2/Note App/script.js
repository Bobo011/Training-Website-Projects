const noteEl =document.querySelector('.note');
const buttonEl = document.querySelector('#btn')

// Get reference to the app container
const appEl = document.querySelector('#app');

// Add click event listener to the button
buttonEl.addEventListener('click', function() {
  // Create a new note element
  const newNoteEl = document.createElement('textarea');
  newNoteEl.classList.add('note');
  newNoteEl.placeholder = 'Empty Note';

  // Add double-click event listener to the app container
appEl.addEventListener('dblclick', function(event) {
    // Only remove note elements
    if (event.target.classList.contains('note')) {
      event.target.remove();
    }
  });

  // Append the new note element to the app container
  appEl.insertBefore(newNoteEl, buttonEl);
});
