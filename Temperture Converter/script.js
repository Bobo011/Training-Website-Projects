const celsiusEl = document.querySelector('#celsius');
const fahrenheitEl = document.querySelector('#fahrenheit');
const kelvin =document.querySelector('#kelvin');

const celsiusToFahrenheit = (celsiusEl * 1.8) + 32
const fahrenheitToCelsius = (fahrenheitEl - 32) / 1.8
const celsiusToKelvin = celsiusEl + 273.15
const kelvinToCelsius = kelvin - 273.15
const fahrenheitToKelvin = (fahrenheitEl + 459.67) / 1.8
const kelvinToFahrenheit= (kelvin * 1.8) - 459.67

