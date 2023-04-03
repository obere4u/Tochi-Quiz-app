// Selectors
const questions = [
  //objects used to store the questions
  {
    question: "How many days makes a week ?",
    optionA: "10 days",
    optionB: "14 days",
    optionC: "5 days",
    optionD: "7 days",
    correctOption: "optionD",
  },

  {
    question: "How many players are allowed on a soccer pitch ?",
    optionA: "10 players",
    optionB: "11 players",
    optionC: "9 players",
    optionD: "12 players",
    correctOption: "optionB",
  },

  {
    question: "Who was the first President of USA ?",
    optionA: "Donald Trump",
    optionB: "Barack Obama",
    optionC: "Abraham Lincoln",
    optionD: "George Washington",
    correctOption: "optionD",
  },

  {
    question: "30 days has ______ ?",
    optionA: "January",
    optionB: "December",
    optionC: "June",
    optionD: "August",
    correctOption: "optionC",
  },

  {
    question: "How many hours can be found in a day ?",
    optionA: "30 hours",
    optionB: "38 hours",
    optionC: "48 hours",
    optionD: "24 hours",
    correctOption: "optionD",
  },

  {
    question: "Which is the longest river in the world ?",
    optionA: "River Nile",
    optionB: "Long River",
    optionC: "River Niger",
    optionD: "Lake Chad",
    correctOption: "optionA",
  },

  {
    question: "_____ is the hottest Continent on Earth ?",
    optionA: "Oceania",
    optionB: "Antarctica",
    optionC: "Africa",
    optionD: "North America",
    correctOption: "optionC",
  },

  {
    question: "Which country is the largest in the world ?",
    optionA: "Russia",
    optionB: "Canada",
    optionC: "Africa",
    optionD: "Egypt",
    correctOption: "optionA",
  },

  {
    question: "Which of these numbers is an odd number ?",
    optionA: "Ten",
    optionB: "Twelve",
    optionC: "Eight",
    optionD: "Eleven",
    correctOption: "optionD",
  },

  {
    question: `"You Can't see me" is a popular saying by`,
    optionA: "Eminem",
    optionB: "Bill Gates",
    optionC: "Chris Brown",
    optionD: "John Cena",
    correctOption: "optionD",
  },

  {
    question: "Where is the world tallest building located ?",
    optionA: "Africa",
    optionB: "California",
    optionC: "Dubai",
    optionD: "Italy",
    correctOption: "optionC",
  },

  {
    question: "The longest river in the United Kingdom is ?",
    optionA: "River Severn",
    optionB: "River Mersey",
    optionC: "River Trent",
    optionD: "River Tweed",
    correctOption: "optionA",
  },

  {
    question: "How many permanent teeth does a dog have ?",
    optionA: "38",
    optionB: "42",
    optionC: "40",
    optionD: "36",
    correctOption: "optionB",
  },

  {
    question: "Which national team won the football World cup in 2018 ?",
    optionA: "England",
    optionB: "Brazil",
    optionC: "Germany",
    optionD: "France",
    correctOption: "optionD",
  },

  {
    question: "Which US state was Donald Trump Born ?",
    optionA: "New York",
    optionB: "California",
    optionC: "New Jersey",
    optionD: "Los Angeles",
    correctOption: "optionA",
  },

  {
    question: "How man states does Nigeria have ?",
    optionA: "24",
    optionB: "30",
    optionC: "36",
    optionD: "37",
    correctOption: "optionC",
  },

  {
    question: "____ is the capital of Nigeria ?",
    optionA: "Abuja",
    optionB: "Lagos",
    optionC: "Calabar",
    optionD: "Kano",
    correctOption: "optionA",
  },

  {
    question: "Los Angeles is also known as ?",
    optionA: "Angels City",
    optionB: "Shining city",
    optionC: "City of Angels",
    optionD: "Lost Angels",
    correctOption: "optionC",
  },

  {
    question: "What is the capital of Germany ?",
    optionA: "Georgia",
    optionB: "Missouri",
    optionC: "Oklahoma",
    optionD: "Berlin",
    correctOption: "optionD",
  },

  {
    question: "How many sides does an hexagon have ?",
    optionA: "Six",
    optionB: "Seven",
    optionC: "Four",
    optionD: "Five",
    correctOption: "optionA",
  },

  {
    question: "How many planets are currently in the solar system ?",
    optionA: "Eleven",
    optionB: "Seven",
    optionC: "Nine",
    optionD: "Eight",
    correctOption: "optionD",
  },

  {
    question: "Which Planet is the hottest ?",
    optionA: "Jupiter",
    optionB: "Mercury",
    optionC: "Earth",
    optionD: "Venus",
    correctOption: "optionB",
  },

  {
    question: "where is the smallest bone in human body located?",
    optionA: "Toes",
    optionB: "Ears",
    optionC: "Fingers",
    optionD: "Nose",
    correctOption: "optionB",
  },

  {
    question: "How many hearts does an Octopus have ?",
    optionA: "One",
    optionB: "Two",
    optionC: "Three",
    optionD: "Four",
    correctOption: "optionC",
  },

  {
    question: "How many teeth does an adult human have ?",
    optionA: "28",
    optionB: "30",
    optionC: "32",
    optionD: "36",
    correctOption: "optionC",
  },
];

const html = document.querySelector("html");
const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".question");
const optionA = document.querySelector(".optionA");
const optionB = document.querySelector(".optionB");
const optionC = document.querySelector(".optionC");
const optionD = document.querySelector(".optionD");
const nextButton = document.querySelector("#next");
const startButton = document.querySelector("#start");
let timer = document.querySelector(".time");
let questionNumberDisplay = document.querySelector(".question-number span");
const answerButtons = document.querySelectorAll(".answer-option");
const lineValueElement = document.querySelector(".line-value");
// const submitBtn = document.querySelector("submit-btn");
// const resultEl = document.querySelector("result");
let timerCountDown;
let questionNumber = 1;
let currentQuestion = {};
let score = 0;
let selectedAnswer;

let shuffledQuestion = []; //the question will be shuffled but for now, it is an empty array
let playerScore = 0; //holds the player score
let wrongAttempt = 0; //amount of wrong answers picked by player
let indexNumber = 0; //will be used in displaying next question
let correctAnswer = 0;
let wrongAnswer = 0;
let numberOfQuestionAnswered = 0;

//Create HTML elements
const messageContainer = document.createElement("div");
messageContainer.classList.add("message-container");
quizContainer.appendChild(messageContainer);

//function that will shuffle the question and store it the shuffled question array
function handleQuestions() {
  shuffledQuestion = [];
  while (shuffledQuestion.length <= 9) {
      const pickRandomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
      if (!shuffledQuestion.includes(pickRandomQuestion)) {
      shuffledQuestion.push(pickRandomQuestion); //pushes the question the shuffled question
      }
  }
  return shuffledQuestion;
}

// shuffledQuestion = handleQuestions();


//Event Listeners
document.addEventListener("DOMContentLoaded", html);
if (startButton) {
    startButton.addEventListener("click", startQuiz);
} // checks if startButton is null before adding an event listener to it. This will prevent the "Cannot read properties of null" error from occurring
nextButton.addEventListener("click", nextQuestion);

//Functions

//Start Quiz
function startQuiz(e) {
  e.preventDefault(); //prevents default action of button
  window.location.href = "questions.html"; // makes the html to switch pages

  // Display welcome message
  
}

//
window.onload =  () => {
  displayTimer();
  handleQuestions();
  nextQuestion();
  /* 
  The window.onload event is triggered when the entire web page (including all images, scripts, and other resources) has finished loading
  
  Anonymous function is used here

  Inside the window.onload function, we're calling the nextQuestion() function, which is already declared elsewhere in the code. This will ensure that the nextQuestion() function is called as soon as the page finishes loading.

  This code ensures that the nextQuestion() function is called automatically when the page is reloaded, so that the first quiz question is displayed without the need for the user to click a button or take any other action.
  */
};

const timerDuration = 16;
const progressBar = document.querySelector(".progress-bar");

const updateProgressBar = () => {
  const maxWidth = progressBar.parentNode.offsetWidth; //defines a constant maxWidth and assigns it the value of the width of the parent element of the progressBar element. This will be used to calculate the width of the progress bar.

  const minWidth = 0;
  const percentProgress = 1 - timerCount / timerDuration;
  // let lineValue = (maxWidth - minWidth) * percentProgress;
  let lineValue = (maxWidth - minWidth) * percentProgress;
  const redWidth = (maxWidth - minWidth) * 0.05; // calculate width of red part
  const greenWidth = (maxWidth - minWidth) * 0.95; // calculate width of green part

  if (timerCount <= 5) {
    // set the width of the red part
    progressBar.style.backgroundImage = `linear-gradient(to right, green ${redWidth}px, red ${greenWidth}px)`;
  } else {
    // set the width of the green part only
    progressBar.style.backgroundImage = `linear-gradient(to right, green ${lineValue}px, white 0)`;
  }
  progressBar.style.width = `${lineValue}px`;

};

//adds zero 0 before the time once it is a single unit
function leadingZero(time) {
  if (time < 10) {
  time = "0" + time;
  }
  return time;
}

const displayTimer = () => {
  //declares a constant variable called displayTimer that is a function.

  clearInterval(timerCountDown);
  timerCountDown = setInterval(() => {
    //declares a variable called timerCountDown that is a function and sets an interval that will execute every 1 second (1000 milliseconds)
    timerCount--; //decrements the timerCount variable by 1 each second
    timer.textContent = `${timerCount}s`; //updates the text content of an HTML element with a class of timer to show the current timerCount value in seconds
    updateProgressBar();

    if (timerCount > 5) {
      //checks whether timerCounter is above 5, if yes the code block runs
      timer.textContent = `${leadingZero(timerCount)}s`;
      timer.style.color = "green";
    } else if (timerCount > 0 && timerCount <= 5) {
      //checks if the timerCount is strictly 5, if yes then from 5 and below will in red color
      timer.textContent = `${leadingZero(timerCount)}s`;
      timer.style.color = "red";
    } else {
      timer.textContent = `${leadingZero(timerCount)}`;
      setTimeout(() => {
        nextQuestion();
      }, 1700);
      clearInterval(timerCountDown);
    }
  }, 1500);
};

//function that display next question in the array
function nextQuestion(e) {
  if (e) {
    e.preventDefault(); // preventDefault if the e or event object is defined
  }
  questionNumber = indexNumber === 0 ? 1 : indexNumber + 1; // set questionNumber to 1 when indexNumber is 0, otherwise set it to indexNumber + 1

  messageContainer.innerText = "";
  handleQuestions(); //calls the handleQuestions() function
  const currentQuizQuestion = shuffledQuestion[indexNumber]; //sets a new variable called currentQuizQuestion. This variable gets its value from an array called questions, at a position determined by another variable called

  question.textContent = currentQuizQuestion.question;
  optionA.innerHTML = currentQuizQuestion["optionA"];
  optionB.innerHTML = currentQuizQuestion["optionB"];
  optionC.innerHTML = currentQuizQuestion["optionC"];
  optionD.innerHTML = currentQuizQuestion["optionD"];

  /* 
    Sets the contents of the various HTML elements in the quiz. By changing the the textContent of those elements, we will be able to make the question and answer choice visible to the user.

    textContent is different from innerHTML
  */
  questionNumberDisplay.textContent = questionNumber;

  if (numberOfQuestionAnswered === 10) {
    clearInterval(timerCountDown);
    window.location.href = "end.html";
  } else {
    numberOfQuestionAnswered++;
    console.log(numberOfQuestionAnswered);
    resetState();
    timerCount = 15; // sets the value for variable timeCount to 15
    clearInterval(timerCountDown); // clears the timerCountDown function once the time is up
    answerCheck();
    indexNumber++; //increments currentQuizQuestion counter by 1. This is very CRUCIAL as it allows us to show the next question in the quiz each time the nextQuestion button is clicked/pressed.
    // check if indexNumber is greater than or equal to the length of the shuffledQuestion array
    if (indexNumber >= shuffledQuestion.length) {
      clearInterval(timerCountDown);
      window.location.href = "end.html"; // redirect to next page
    } else {
      displayTimer();
    }
    return currentQuizQuestion;
  }
}


// 
const resetState = () => {
  // Reset the selected answer and the answer outlines
  selectedAnswer = null;
  answerButtons.forEach((button) => {
    button.style.outline = "none";
  });
}


// Checks for answers
function answerCheck() {
  // Get the current quiz question and its answer
  const currentQuizQuestion = shuffledQuestion[indexNumber];
  const currentQuizQuestionAnswer = currentQuizQuestion.correctOption.trim();

  // Loop through each answer button and add a click event listener
  answerButtons.forEach((answerButton) => {
    // Remove the previous click event listener
    answerButton.removeEventListener("click", handleAnswerClick);

    // Add a new click event listener
    answerButton.addEventListener("click", handleAnswerClick);
  });

  function handleAnswerClick() {
    // Get the selected answer and the correct answer for the current question
    const selectedAnswer = this.dataset.answer;
    const trimmedSelectedAnswer = selectedAnswer.trim();
    const trimmedCorrectAnswer = currentQuizQuestionAnswer;

    // Check if the selected answer is correct or not
    if (trimmedSelectedAnswer === trimmedCorrectAnswer) {
      // If the selected answer is correct, increase the score and go to the next question
      correctAnswer++;
      showMessage("correct!", true);
      this.style.outline = "1px solid green";
      clearInterval(timerCountDown);
      setTimeout(() => {
        nextQuestion();
      }, 1500);
      questionNumber++;
    } else {
      // If the selected answer is wrong, increase the wrong answer count
      wrongAnswer++;
      showMessage("wrong!", false);
    }
  }
}

//remember to add the HTML
function showMessage(message, isCorrect) {
  console.log("Showing message:", message);
  messageContainer.innerText = message;
  messageContainer.classList.remove("message-correct", "message-wrong");
  if (isCorrect) {
    messageContainer.classList.add("message-correct");
  } else {
    messageContainer.classList.add("message-wrong");
  }
}
