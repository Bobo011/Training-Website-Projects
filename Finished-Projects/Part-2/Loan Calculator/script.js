// Get input elements
const loanAmountInput = document.querySelector('#loan-amount');
const interestRateInput = document.querySelector('#interest-rate');
const monthsToPayInput = document.querySelector('#months-to-pay');
const monthlyPayment = document.querySelector('#monthly');

// Function to calculate monthly payment and save loan details to local storage
function calculateMonthlyPayment() {
  const loanAmount = parseFloat(loanAmountInput.value);
  const interestRate = parseFloat(interestRateInput.value) / 100 / 12;
  const monthsToPay = parseFloat(monthsToPayInput.value);

  const monthlyPaymentValue = (loanAmount * interestRate * Math.pow(1 + interestRate, monthsToPay)) /
    (Math.pow(1 + interestRate, monthsToPay) - 1);

  monthlyPayment.innerText = `Monthly Payment: ${monthlyPaymentValue.toFixed(2)}`;

  // Save loan details to local storage
  localStorage.setItem('loanAmount', loanAmount);
  localStorage.setItem('interestRate', interestRateInput.value);
  localStorage.setItem('monthsToPay', monthsToPayInput.value);
  localStorage.setItem('monthlyPayment', monthlyPaymentValue.toFixed(2));
}

// Load loan details from local storage and calculate monthly payment
document.addEventListener('DOMContentLoaded', () => {
  const loanAmount = localStorage.getItem('loanAmount');
  const interestRate = localStorage.getItem('interestRate');
  const monthsToPay = localStorage.getItem('monthsToPay');
  const monthlyPaymentValue = localStorage.getItem('monthlyPayment');

  if (loanAmount && interestRate && monthsToPay && monthlyPaymentValue) {
    loanAmountInput.value = loanAmount;
    interestRateInput.value = interestRate;
    monthsToPayInput.value = monthsToPay;
    monthlyPayment.innerText = `Monthly Payment: ${monthlyPaymentValue}`;
  }

  calculateMonthlyPayment();
});

// Add event listener to input fields to calculate monthly payment and save loan details to local storage
loanAmountInput.addEventListener('input', () => {
  calculateMonthlyPayment();
});

interestRateInput.addEventListener('input', () => {
  calculateMonthlyPayment();
});

monthsToPayInput.addEventListener('input', () => {
  calculateMonthlyPayment();
});
