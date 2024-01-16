const questions = [
  {
    question: "what is name",
    answers: [
      { text: "nnnn", correct: false },
      { text: "nnnn", correct: false },
      { text: "presh", correct: true },
      { text: "nnnn", correct: false },
    ],
  },
  {
    question: "what is name",
    answers: [
      { text: "nnnn", correct: false },
      { text: "nnnn", correct: false },
      { text: "presh", correct: true },
      { text: "nnnn", correct: false },
    ],
  },
  {
    question: "what is name",
    answers: [
      { text: "nnnn", correct: false },
      { text: "nnnn", correct: false },
      { text: "presh", correct: true },
      { text: "nnnn", correct: false },
    ],
  },
  {
    question: "what is name",
    answers: [
      { text: "nnnn", correct: false },
      { text: "nnnn", correct: false },
      { text: "presh", correct: true },
      { text: "nnnn", correct: false },
    ],
  },
  {
    question: "what is name",
    answers: [
      { text: "nnnn", correct: false },
      { text: "nnnn", correct: false },
      { text: "presh", correct: true },
      { text: "nnnn", correct: false },
    ],
  },
  {
    question: "what is name",
    answers: [
      { text: "nnnn", correct: false },
      { text: "nnnn", correct: false },
      { text: "presh", correct: true },
      { text: "nnnn", correct: false },
    ],
  },
  {
    question: "what is name",
    answers: [
      { text: "nnnn", correct: false },
      { text: "nnnn", correct: false },
      { text: "presh", correct: true },
      { text: "nnnn", correct: false },
    ],
  },
  {
    question: "what is name",
    answers: [
      { text: "nnnn", correct: false },
      { text: "nnnn", correct: false },
      { text: "presh", correct: true },
      { text: "nnnn", correct: false },
    ],
  },
  {
    question: "what is name",
    answers: [
      { text: "nnnn", correct: false },
      { text: "nnnn", correct: false },
      { text: "presh", correct: true },
      { text: "nnnn", correct: false },
    ],
  },
  {
    question: "what is name",
    answers: [
      { text: "nnnn", correct: false },
      { text: "nnnn", correct: false },
      { text: "presh", correct: true },
      { text: "nnnn", correct: false },
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
