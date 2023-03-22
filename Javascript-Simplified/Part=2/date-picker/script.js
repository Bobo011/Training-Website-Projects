// JavaScript code
import { format} from 'date-fns';


const container = document.querySelector('.date-picker-container');
const currentMonth = container.querySelector('.current-month');
const datePicker = container.querySelector('.date-picker');
//main button
const datePickerBtnEl = container.querySelector('.date-picker-button');

//container buttons
const previousMonthBtnEl = document.querySelector('.prev-month-button')
const nextMonthBtnEl = document.querySelector('.next-month-button')
const dateButtons = document.querySelectorAll('.date');


//Formatting the dates
let currentDate = new Date();
const formattedDate = format(currentDate, 'MMMM do, yyyy');
const formattedDateMonth = format(currentDate, 'MMMM - yyyy');


//Button will display the current day, unless changed
datePickerBtnEl.innerText = formattedDate;
//current months text
currentMonth.innerText = formattedDateMonth





//Toggle between showing and un-showing the date-picker container
datePickerBtnEl.addEventListener('click',()=>{
    datePicker.classList.toggle('show')
})


dateButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove "selected" class from all other buttons
      dateButtons.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.classList.remove('selected');
        }
      });
      // Add "selected" class to clicked button
      button.classList.add('selected');
    });
  });


