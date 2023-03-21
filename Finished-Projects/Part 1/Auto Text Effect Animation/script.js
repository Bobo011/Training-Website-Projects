

//This is someone elses method
const containerEl = document.querySelector(".text-container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}






















//this is my original method
// const textEl = document.querySelector('.text-container');
// const speed = 100;
// let templates = ['I am a ', 'I am a ', 'I am a ', 'I am an '];
// let texts = [' Youtuber', ' Web developer', ' Freelancer', ' Instructor'];

// function autoText(index) {
//   const template = templates[index];
//   const text = texts[index];
//   const animate = () => {
//     setTimeout(() => {
//       let i = 0;
//       const type = () => {
//         if (i < text.length) {
//           if (text[i] !== ' ') {
//             textEl.innerText += text[i];
//           } else {
//             textEl.innerText += '\u00A0'; // add a non-breaking space
//           }
//           i++;
//           setTimeout(type, speed);
//         } else {
//           setTimeout(() => {
//             textEl.innerText = template;
//             if (index < texts.length - 1) {
//               autoText(index + 1);
//             } else {
//               autoText(0);
//             }
//           }, speed * text.length);
//         }
//       };
//       textEl.innerText = template;
//       type();
//     }, speed);
//   };
//   animate();
// }

// autoText(0);
