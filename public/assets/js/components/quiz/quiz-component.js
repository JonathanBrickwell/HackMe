/* Get Input Fields and Texts elements */
const userInputField = document.getElementById("userInput");
const questionText = document.getElementById("question");

/* Get Quiz Game Wrappers */
const startTheGameWrapper = document.getElementById('start');
const quizGameWrapper = document.getElementById('quiz');
const endScreenWrapper = document.getElementById('endgame');

/* Iterators */
let currentAnswerIndex = 0;
let currentQuestionIndex = 1;
let score = 0;

function StartTheGame() {
    startTheGameWrapper.classList.add('disabled');
    quizGameWrapper.classList.remove('disabled');
    ResetUserInput();
    DisplayNextQuestion();
}

function Endgame() {
    let quizDataModelSize = Object.keys(quizDataModel[0].answer).length;
    if(currentAnswerIndex === quizDataModelSize) {
        quizGameWrapper.classList.add('disabled');
        endScreenWrapper.classList.remove('disabled');
    }
}

function DisplayNextQuestion() {
    var html = "";
    html += "<h3 class='font-weight-bold'>" + currentQuestionIndex + ". Question " + "</h3>";
    html +=  questionsModel[currentAnswerIndex].question;
    questionText.innerHTML = html;
}

function ResetUserInput() {
    userInputField.value = "";
    userInputField.style.borderColor = "transparent";
}

function IsCorrectAnswer() { 
    if(userInputField.value === quizDataModel[0].answer[currentAnswerIndex]) {
        currentAnswerIndex++;
        currentQuestionIndex++;
    } else {
        userInputField.style.borderColor = "red";
    }
}

function Submit() {
    if(quizDataModel) {
        IsCorrectAnswer();
        Endgame();
        ResetUserInput();
        DisplayNextQuestion();
    }
}







