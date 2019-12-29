const userInputField = document.getElementById("userInput");
const questionText = document.getElementById("question");

const startTheGameWrapper = document.getElementById('start');
const quizGameWrapper = document.getElementById('quiz');

const startButton = document.getElementById('startBtn');
startButton.addEventListener("click", startTheGame);

var currentAnswerIndex = 0;

function QuizComponent(quizData) {
    this.quizData = quizData;
    var highScore = 0;
    var userInput = " ";
    var score = 0;
}

function startTheGame() {
    console.log("Started!");
    startTheGameWrapper.classList.add('disabled');
    quizGameWrapper.classList.remove('disabled');
    DisplayNextQuestion();
}

function DisplayNextQuestion() {
    questionText.innerHTML = questionsModel[currentAnswerIndex].question;
}

function ResetUserInput() {
    return userInput = "";
}

function GetUserInput() {
    userInput = userInputField.value;
    return userInput;
}

function CheckCorrectAnswer() {      
     
}





