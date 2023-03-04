// Get the HTML elements
const currencyFirst = document.querySelector("#currency-first");
const currencySecond = document.querySelector('#currency-second');
const worthFirst = document.querySelector('#worth-first');
const worthSecond = document.querySelector('#worth-second');
const exchangeRate = document.querySelector('#exchange-rate');

// Fetch the exchange rate data
const getExchangeRate = async () => {
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFirst.value}`);
  const data = await response.json();
  const rate = data.rates[currencySecond.value];
  exchangeRate.innerText = `1 ${currencyFirst.value} = ${rate.toFixed(4)} ${currencySecond.value}`;
  return rate;
};

// Convert the currency
const convertCurrency = () => {
  getExchangeRate().then(rate => {
    worthSecond.value = (worthFirst.value * rate).toFixed(2);
  });
};

// Event listeners for currency conversion
currencyFirst.addEventListener('change', convertCurrency);
currencySecond.addEventListener('change', convertCurrency);
worthFirst.addEventListener('input', convertCurrency);
