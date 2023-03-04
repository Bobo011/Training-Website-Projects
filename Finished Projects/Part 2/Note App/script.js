const appEl = document.querySelector('#app');
const buttonEl = document.querySelector('.btn');

// Load notes from local storage and create a note element for each note
getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  appEl.insertBefore(noteEl, buttonEl);
});

// Function to create a new note element
function createNoteEl(id, content) {
  const element = document.createElement('textarea');
  element.classList.add('note');
  element.placeholder = "Empty Note";
  element.value = content;

  // Add event listener to delete note on double click
  element.addEventListener('dblclick', () => {
    const warning = confirm('Do you want to delete this note?');
    if (warning) {
      deleteNote(id, element);
    }
  });

  // Add event listener to update note content on input change
  element.addEventListener('input', () => {
    updateNote(id, element.value);
  });

  return element;
}

// Function to delete a note from the app and local storage
function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);
  saveNoteToLocalStorage(notes);
  appEl.removeChild(element);
}

// Function to update the content of a note in local storage
function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNoteToLocalStorage(notes);
}

// Function to add a new note to the app and local storage
function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: ''
  }
  const newNoteEl = createNoteEl(noteObj.id, noteObj.content);
  appEl.insertBefore(newNoteEl, buttonEl);
  notes.push(noteObj);
  saveNoteToLocalStorage(notes);
}

// Function to save notes to local storage
function saveNoteToLocalStorage(notes) {
  localStorage.setItem('note-app', JSON.stringify(notes));
}

// Function to get notes from local storage
function getNotes() {
  return JSON.parse(localStorage.getItem('note-app') || '[]');
}

// Add event listener to button to add a new note
buttonEl.addEventListener('click', addNote);
