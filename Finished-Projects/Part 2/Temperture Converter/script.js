// Get the input elements
const celsiusEl = document.querySelector('#celsius');
const fahrenheitEl = document.querySelector('#fahrenheit');
const kelvinEl = document.querySelector('#kelvin');

// Define the temperature conversion functions
function celsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit + 459.67) / 1.8;
}

function kelvinToFahrenheit(kelvin) {
  return (kelvin * 1.8) - 459.67;
}

// Define the computeTemp function that will be called when the input value changes
function computeTemp(event) {
  // Get the current input element and value
  const inputEl = event.target;
  const inputValue = parseFloat(inputEl.value);

  // Check which input element was changed and perform the appropriate temperature conversion
  if (inputEl.id === 'celsius') {
    fahrenheitEl.value = celsiusToFahrenheit(inputValue);
    kelvinEl.value = celsiusToKelvin(inputValue);
  } else if (inputEl.id === 'fahrenheit') {
    celsiusEl.value = fahrenheitToCelsius(inputValue);
    kelvinEl.value = fahrenheitToKelvin(inputValue);
  } else if (inputEl.id === 'kelvin') {
    celsiusEl.value = kelvinToCelsius(inputValue);
    fahrenheitEl.value = kelvinToFahrenheit(inputValue);
  }
}

// Add event listeners to the input elements to call the computeTemp function when the input value changes
celsiusEl.addEventListener('input', computeTemp);
fahrenheitEl.addEventListener('input', computeTemp);
kelvinEl.addEventListener('input', computeTemp);




//This is a different method
// function computeTemp(event) {
//     const currentValue = +event.target.value;
  
//     switch (event.target.name) {
//       case "celsius":
//         kelvinEl.value = (currentValue + 273.32).toFixed(2);
//         fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
//         break;
//       case "fahrenheit":
//         celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
//         kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
//         break;
//       case "kelvin":
//         celsiusEl.value = (currentValue - 273.32).toFixed(2);
//         fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
//         break;
//       default:
//         break;
//     }
//   }