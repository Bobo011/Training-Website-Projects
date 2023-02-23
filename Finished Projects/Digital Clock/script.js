const hours = document.querySelector('.number-hours')
const minutes = document.querySelector('.number-minutes')
const seconds = document.querySelector('.number-seconds')
const amPm = document.querySelector('.am-pm')

function updateTime() {
    const today = new Date();
    let currentHour = today.getHours();
    const ampm = currentHour >= 12 ? 'PM' : 'AM';
    currentHour = currentHour % 12 || 12;
    const currentMinute = today.getMinutes();
    const currentSecond = today.getSeconds();
    hours.innerText = currentHour < 10 ? '0' + currentHour : currentHour;
    minutes.innerText = currentMinute < 10 ? '0' + currentMinute : currentMinute;
    seconds.innerText = currentSecond < 10 ? '0' + currentSecond : currentSecond;
    amPm.innerText = ampm;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);