const inputEl = document.querySelector('#pounds');
const weightInfoEl = document.querySelector('#weight-info');
const invalidNumberEl = document.querySelector('.invalid-number');

inputEl.addEventListener('input', () => {
  const pounds = inputEl.value;

  if (pounds < 0) {
    invalidNumberEl.style.display = 'block';
    weightInfoEl.style.display = 'none';
  } else {
    invalidNumberEl.style.display = 'none';
    const kilograms = (pounds * 0.45359237).toFixed(2);
    weightInfoEl.textContent = `Your weight in kg is: ${kilograms}`;
    weightInfoEl.style.display = 'block';
  }
});

setTimeout(() => {
  inputEl.value = '';
  weightInfoEl.style.display = 'block';
  weightInfoEl.textContent = `Your weight in kg is:`
  invalidNumberEl.style.display = 'none';
}, 10000);
