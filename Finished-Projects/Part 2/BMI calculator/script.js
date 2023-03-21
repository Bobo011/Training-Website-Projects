const heightEl = document.querySelector('#height');
const weightEl = document.querySelector('#weight');
const bmiEl = document.querySelector('#bmi-result');
const weightConditionEl = document.querySelector('#weight-condition');
const computeBmiBtn = document.querySelector('#btn');

computeBmiBtn.addEventListener('click', () => {
  const height = heightEl.value / 100; // Convert cm to m
  const weight = weightEl.value;
  const bmi = (weight / (height * height)).toFixed(2); // Calculate BMI with 2 decimal places
  bmiEl.value = bmi; // Display the result in the bmiEl input field

  // Determine the weight condition based on BMI value
  let weightCondition;
  if (bmi < 18.5) {
    weightCondition = 'Underweight';
  } else if (bmi < 25) {
    weightCondition = 'Normal weight';
  } else if (bmi < 30) {
    weightCondition = 'Overweight';
  } else {
    weightCondition = 'Obese';
  }

  weightConditionEl.textContent = weightCondition; // Display the weight condition
});
