// JavaScript code
import { format, startOfMonth, addDays } from 'date-fns';


const container = document.querySelector('.date-picker-container');
const currentMonth = container.querySelector('.current-month');
const datePicker = container.querySelector('.date-picker');
const datePickerBtnEl = container.querySelector('.date-picker-button');

const previousMonthBtnEl = document.querySelector('.prev-month-button month-button')
const nextMonthBtnEl = document.querySelector('.next-month-button month-button')

let currentDate = new Date();
const formattedDate = format(currentDate, 'MMMM do, yyyy');






datePickerBtnEl.addEventListener('click',()=>{
    datePicker.classList.toggle('show')
})

