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
// const submitBtn = document.querySelector("submit-btn");
// const resultEl = document.querySelector("result");
let timerCountDown;
let questionNumber = 1;
let currentQuestion = {};
let score = 0;
let selectedAnswer;

// let questionNumber = document.querySelector('.question-number');

let shuffledQuestion = []; //the question will be shuffled but for now, it is an empty array
let playerScore = 0; //holds the player score
let wrongAttempt = 0; //amount of wrong answers picked by player
let indexNumber = 0; //will be used in displaying next question

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

shuffledQuestion = handleQuestions();


//Event Listeners
if (startButton) {
    startButton.addEventListener("click", startQuiz);
} // checks if startButton is null before adding an event listener to it. This will prevent the "Cannot read properties of null" error from occurring
nextButton.addEventListener("click", nextQuestion);
// answerButtons.addEventListener("click", answerCheck);
// if (answerButtons.length > 0) {
//     answerButtons.forEach((answerButton) => {
//         answerButton.addEventListener("click", () => {
//         selectedAnswer = answerButton.id;
//         console.log(selectedAnswer)
//         });
//     });
// }

//Functions

//Start Quiz
function startQuiz(e) {
  e.preventDefault(); //prevents default action of button
  window.location.href = "questions.html"; // makes the html to switch pages
}

//
window.onload = function () {
  nextQuestion();
  //   handleQuestions();
  /* 
    The window.onload event is triggered when the entire web page (including all images, scripts, and other resources) has finished loading
    
    Anonymous function is used here

    Inside the window.onload function, we're calling the nextQuestion() function, which is already declared elsewhere in the code. This will ensure that the nextQuestion() function is called as soon as the page finishes loading.

    This code ensures that the nextQuestion() function is called automatically when the page is reloaded, so that the first quiz question is displayed without the need for the user to click a button or take any other action.
    */
};

//function that display next question in the array
function nextQuestion(e) {
    if (e) {
        e.preventDefault(); // preventDefault if the e or event object is defined
    }

    handleQuestions(); //calls the handleQuestions() function
    displayTimer();
    let currentQuizQuestion = shuffledQuestion[indexNumber]; //sets a new variable called currentQuizQuestion. This variable gets its value from an array called questions, at a position determined by another variable called
    const currentQuizQuestionAns = currentQuizQuestion.correctOption;
    console.log(currentQuizQuestionAns);
    indexNumber++;; //increments currentQuizQuestion counter by 1. This is very CRUCIAL as it allows us to show the next question in the quiz each time the nextQuestion button is clicked/pressed.
    question.textContent = currentQuizQuestion.question;
    optionA.textContent = currentQuizQuestion.optionA;
    optionB.textContent = currentQuizQuestion.optionB;
    optionC.textContent = currentQuizQuestion.optionC;
    optionD.textContent = currentQuizQuestion.optionD;
    /* 
        Sets the contents of the various HTML elements in the quiz. By changing the the textContent of those elements, we will be able to make the question and answer choice visible to the user.

        textContent is different from innerHTML
    */
    questionNumber = indexNumber; //questionNum
    questionNumberDisplay.textContent = questionNumber;
    // if (questionNumber === 10) {
    //   clearInterval(timerCountDown);
    // }
  if (questionNumber === 11) {
    clearInterval(timerCountDown);
    window.location.href = "end.html";
  } else {
    timerCount = 16; // sets the value for variable timeCount to 15
    clearInterval(timerCountDown); // clears the timerCountDown function once the time is up
    displayTimer(); // call the displayTimer function and starts the time for next question
  }
}



const displayTimer = () => {
    //declares a constant variable called displayTimer that is a function.
    let timerCount = 16;
    clearInterval(timerCountDown);
    timerCountDown = setInterval(() => {
    //declares a variable called timerCountDown that is a function and sets an interval that will execute every 1 second (1000 milliseconds)
    timerCount--; //decrements the timerCount variable by 1 each second
    timer.textContent = `${timerCount}s`; //updates the text content of an HTML element with a class of timer to show the current timerCount value in seconds
    if (timerCount > 5) {
        //checks whether timerCounter is above 5, if yes the code block runs
        timer.textContent = `${timerCount}s`;
        timer.style.color = "green";
    } else if (timerCount > 0 && timerCount <= 5) {
        //checks if the timerCount is strictly 5, if yes then from 5 and below will in red color
        timer.textContent = `${timerCount}s`;
        timer.style.color = "red";
    } else {
        clearInterval(timerCountDown); // if timer reaches 0, clear the interval
        nextQuestion(); // move to next question
    }
  }, 1000);
};




// Checks for answers
function answerCheck() {

  
}





// function deselectAnswers() {
//   const answerElements = document.querySelectorAll(".answer-option");

//   answerElements.forEach((answerElement) => {
//     answerElement.querySelector(".answer-option").checked = false;
//   });
// }