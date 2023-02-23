const inputField = document.querySelector('.text');
const totalCount = document.querySelector('.total-numbers');
const remainingCount = document.querySelector('.remaining');

inputField.addEventListener('input', function() {
  let inputLength = this.value.length;
  if (inputLength > 50) {
    this.value = this.value.substring(0, 50);
    inputLength = 50;
  }
  totalCount.textContent = inputLength;
  remainingCount.textContent = 50 - inputLength;
});

