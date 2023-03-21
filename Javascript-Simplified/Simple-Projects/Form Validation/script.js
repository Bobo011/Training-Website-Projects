// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const formEl = document.querySelector('#form');
const errorsEl = document.querySelector('.errors');
const errorTitleEl = document.querySelector('.error-title');
const errorsListEl = document.querySelector('.errors-list');
const formGroupEls = document.querySelectorAll('.form-group');
const usernameEl = document.querySelector('#username');
const passwordEl = document.querySelector('#password');
const passwordConfirmationEl = document.querySelector('#password-confirmation');
const termsEl = document.querySelector('#terms');

function showErrorScreen() {
  errorsEl.style.display = 'block';
  errorTitleEl.style.display = 'block';
  errorsListEl.style.display = 'block';
}

const errorMessages = [  '1. Ensure the username is at least 6 characters long',  '2. Ensure the password is at least 10 characters long',  '3. Ensure the password and confirmation password match',  '4. Ensure the terms checkbox is checked'];

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
formEl.addEventListener('submit', function(event) {
  
  

  // Clear any old error messages
  clearErrors();

  // Define the following validation checks with appropriate error messages
  const errors = [];

  if (usernameEl.value.length < 6) {
    errors.push(errorMessages[0]);
  }

  if (passwordEl.value.length < 10) {
    errors.push(errorMessages[1]);
  }

  if (passwordEl.value !== passwordConfirmationEl.value) {
    errors.push(errorMessages[2]);
  }

  if (!termsEl.checked) {
    errors.push(errorMessages[3]);
  }

  // If there are any errors then prevent the form from submitting and show the error messages
  if (errors.length > 0) {
    showErrors(errors);
    // Prevent the form from submitting
    event.preventDefault();
    // showErrorScreen();
    return false;
  }

  // Submit the form if there are no errors
  formEl.submit();
});

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
  while (errorsListEl.firstChild) {
    errorsListEl.removeChild(errorsListEl.firstChild);
  }

  errorsEl.classList.remove('show');
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
  errorMessages.forEach(function(errorMessage) {
    const liEl = document.createElement('li');
    liEl.style.listStyleType ='square'
    liEl.textContent = errorMessage;
    errorsListEl.appendChild(liEl);
  });

    errorsEl.classList.add('show');
}
