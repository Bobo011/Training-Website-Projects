// ceil rounds the numbers
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const correctAns = num1 * num2;
const scoreBoard = document.querySelector('.score')
//takes the score from local storage and JSON.parse 
//converts it into a number
let score = JSON.parse(localStorage.getItem('score'));
//this prevents an error in case there is no score
if(!score){
score=0;
}

const questionEl = document.querySelector(".question");
const formEl = document.querySelector("#form");
const inputEl = document.querySelector(".input");
questionEl.innerText = `What is ${num1} multiplied by ${num2}`;

formEl.addEventListener("submit", () => {
  // +converts inputEl into a number typeoff
  const userAnswer = +inputEl.value;
  if (userAnswer == correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  //JSON.stringify(score)) this converts score into a string before storing it
  localStorage.setItem("score", JSON.stringify(score));
}

scoreBoard.innerText = `score: ${score}`;
