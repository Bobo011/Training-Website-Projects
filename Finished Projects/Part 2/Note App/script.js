const noteEl =document.querySelector('.note');
const buttonEl = document.querySelector('#btn')

// Get reference to the app container
const appEl = document.querySelector('#app');

// Add double-click event listener to the app container
appEl.addEventListener('dblclick', function(event) {
  // Only remove note elements, but not the original note element
  if (event.target.classList.contains('note') && !event.target.getAttribute('readonly')) {
    // Ask user for confirmation before removing note
    if (confirm('Are you sure you want to delete this note?')) {
      event.target.remove();
    }
  }
});

// Add click event listener to the button
buttonEl.addEventListener('click', function() {
  // Create a new note element
  const newNoteEl = document.createElement('textarea');
  newNoteEl.classList.add('note');
  newNoteEl.placeholder = 'Empty Note';

  // Append the new note element to the app container
  appEl.insertBefore(newNoteEl, buttonEl);
});

