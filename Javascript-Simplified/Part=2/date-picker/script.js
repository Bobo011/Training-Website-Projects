import {
  format,
  getUnixTime,
  fromUnixTime,
  addMonths,
  subMonths,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay
} from "date-fns"

const datePickerButton = document.querySelector(".date-picker-button")
const datePicker = document.querySelector(".date-picker")
const datePickerHeaderText = document.querySelector(".current-month")
const previousMonthButton = document.querySelector(".prev-month-button")
const nextMonthButton = document.querySelector(".next-month-button")
const dateGrid = document.querySelector(".date-picker-grid-dates")
let currentDate = new Date()

datePickerButton.addEventListener("click", () => {
  datePicker.classList.toggle("show")
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
  currentDate = selectedDate
  setupDatePicker(selectedDate)
})

function setDate(date) {
  datePickerButton.innerText = format(date, "MMMM do, yyyy")
  datePickerButton.dataset.selectedDate = getUnixTime(date)
}

function setupDatePicker(selectedDate) {
  datePickerHeaderText.innerText = format(currentDate, "MMMM - yyyy")
  setupDates(selectedDate)
}

function setupDates(selectedDate) {
  const firstWeekStart = startOfWeek(startOfMonth(currentDate))
  const lastWeekEnd = endOfWeek(endOfMonth(currentDate))
  const dates = eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd })
  dateGrid.innerHTML = ""

  dates.forEach(date => {
    const dateElement = document.createElement("button")
    dateElement.classList.add("date")
    dateElement.innerText = date.getDate()
    if (!isSameMonth(date, currentDate)) {
      dateElement.classList.add("date-picker-other-month-date")
    }
    if (isSameDay(date, selectedDate)) {
      dateElement.classList.add("selected")
    }
    console.log(selectedDate)
    dateElement.addEventListener("click", () => {
      setDate(date)
      datePicker.classList.remove("show")
    })

    dateGrid.appendChild(dateElement)
  })
}

nextMonthButton.addEventListener("click", () => {
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
  currentDate = addMonths(currentDate, 1)
  setupDatePicker(selectedDate)
})

previousMonthButton.addEventListener("click", () => {
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
  currentDate = subMonths(currentDate, 1)
  setupDatePicker(selectedDate)
})

setDate(new Date())




































// import { format, subMonths, addMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth } from 'date-fns';

// const container = document.querySelector('.date-picker-container');
// const currentMonth = container.querySelector('.current-month');
// const datePicker = container.querySelector('.date-picker');
// //main button
// const datePickerBtnEl = container.querySelector('.date-picker-button');

// //container buttons
// const previousMonthBtnEl = document.querySelector('.prev-month-button')
// const nextMonthBtnEl = document.querySelector('.next-month-button')
// const dateButtons = document.querySelectorAll('.date');

// //Format for displaying the current date
// const dateFormat = 'MMMM do, yyyy';
// const monthFormat = 'MMMM - yyyy';

// //Initial date
// let currentDate = new Date();

// //Button will display the current day, unless changed
// datePickerBtnEl.innerText = format(currentDate, dateFormat);
// //current month's text
// currentMonth.innerText = format(currentDate, monthFormat);

// //Toggle between showing and un-showing the date-picker container
// datePickerBtnEl.addEventListener('click',()=>{
//     datePicker.classList.toggle('show')
// })

// //update the current month
// function updateCurrentMonthText() {
//   currentMonth.innerText = format(currentDate, monthFormat);
// }

// previousMonthBtnEl.addEventListener('click', () => {
//   currentDate = subMonths(currentDate, 1);
//   updateCurrentMonthText();
//   renderDates();
// });

// nextMonthBtnEl.addEventListener('click', () => {
//   currentDate = addMonths(currentDate, 1);
//   updateCurrentMonthText();
//   renderDates();
// });

// function renderDates() {
//   const firstDayOfMonth = startOfMonth(currentDate);
//   const lastDayOfMonth = endOfMonth(currentDate);
//   const firstDayOfCalendar = startOfWeek(firstDayOfMonth, { weekStartsOn: 0 });
//   const lastDayOfCalendar = endOfWeek(lastDayOfMonth, { weekStartsOn: 0 });
  
//   dateButtons.forEach((button, index) => {
//     const date = new Date(firstDayOfCalendar.getTime() + (index * 24 * 60 * 60 * 1000));
//     button.innerText = date.getDate();
    
//     if (!isSameMonth(date, currentDate)) {
//       button.classList.add('date-picker-other-month-date');
//     } else {
//       button.classList.remove('date-picker-other-month-date');
//     }
    
//     // Add logic to handle dates before the start of the month or after the end of the month
//     if (date < firstDayOfMonth || date > lastDayOfMonth) {
//       button.classList.add('date-picker-other-month-date');
//     } else {
//       button.classList.remove('date-picker-other-month-date');
//     }
//   });
// }

// renderDates();

// dateButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       // Remove "selected" class from all other buttons
//       dateButtons.forEach(otherButton => {
//         if (otherButton !== button) {
//           otherButton.classList.remove('selected');
//         }
//       });
//       // Remove "show" class from datePicker element
//       datePicker.classList.remove('show');
//       // Add "selected" class to clicked button
//       button.classList.add('selected');
      
//       // Update datePickerBtnEl with the selected date
//       let selectedDate;
//       if (button.classList.contains('date-picker-other-month-date')) {
//         if (button.innerText < 15) {
//           selectedDate = subMonths(currentDate, 1);
//         } else {
//           selectedDate = addMonths(currentDate, 1);
//         }
//       } else {
//         selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), button.innerText);
//       }
//       datePickerBtnEl.innerText = format(selectedDate, dateFormat);
//     });
    
//   });
