//***This is the JavaScript code of the quiz game app, I will start by getting the HTML elements (DOM)******/

const quizContainer = document.querySelector('body');
const quizRule = document.querySelector('.show');
const startBtn = document.querySelector('#quiz-start-btn');
const questionContainer = document.querySelector('.question-container');
const questionNumber = document.querySelector('.question-number');
const questionWrapper = document.querySelector('.question-wrapper');
const timer = document.querySelector('.timer-time');
const nextQuestion = document.querySelector('.next');
const correctAns = document.querySelector('.correct');
const incorrectAns = document.querySelector('.incorrect');

// window.onload = () => {
// //   quizContainer.classList.remove("hide");
//   quizContainer.classList.add('question-container');
// };

startBtn.addEventListener("click", () => {
    // quizContainer.classList.remove("hide");
    if (questionContainer.style.display === "none") {
        questionContainer.style.display = "block";
    }
  console.log(2);
});


// console.log(incorrectAns)