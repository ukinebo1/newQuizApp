const questions = [
  {
    question: "How do you write a comment in JavaScript?",
    answers: [
      { text: "//This is a comment", correct: true },
      { text: "<!--This is a comment-->", correct: false },
      { text: "/This is a comment/", correct: false },
      { text: "'This is a comment'", correct: false },
    ],
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    answers: [
      { text: "Number", correct: false },
      { text: "String", correct: false },
      { text: "Array", correct: false },
      { text: "Float", correct: true },
    ],
  },
  {
    question: "What is the output of the following code: console.log(2 + '2')?",
    answers: [
      { text: "22", correct: true },
      { text: "4", correct: false },
      { text: "'22'", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which statement is used to exit a loop in JavaScript?",
    answers: [
      { text: "stop", correct: false },
      { text: "exit", correct: false },
      { text: "break", correct: true },
      { text: "return", correct: false },
    ],
  },
  {
    question: "What is the correct syntax for a function in JavaScript?",
    answers: [
      { text: " function: myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
      { text: " myFunction = function()", correct: false },
      { text: "function = myFunction()", correct: false },
    ],
  },
  {
    question: "Which method is used to add a new element to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "addToEnd()", correct: false },
      { text: "append()", correct: false },
      { text: "add()", correct: false },
    ],
  },
  {
    question: "What does the "===" operator do in JavaScript?",
    answers: [
      { text: "Compares two values for equality", correct: true },
      { text: "Assigns a value to a variable", correct: false },
      { text: "Compares two values for inequality", correct: false },
      { text: "Converts a value to a string", correct: false },
    ],
  },
  {
    question: "How do you access the length of a string in JavaScript?",
    answers: [
      { text: " lengthOf()", correct: false },
      { text: " len()", correct: false },
      { text: "length", correct: true },
      { text: "size()", correct: false },
    ],
  },
  {
    question: "How do you declare a JavaScript array?",
    answers: [
      { text: "var myArray = []", correct: true },
      { text: "array myArray = []", correct: false },
      { text: "myArray = {}", correct: false },
      { text: "array myArray = {}", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    answers: [
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "const", correct: true },
      { text: "def", correct: false },
    ],
  },
];

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-button");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showSore(){
    resetState()
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display="block"
}
function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showSore()
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz();
