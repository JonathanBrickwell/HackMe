const userInputField = document.getElementById("userInput");
const questionText = document.getElementById("question");

const startTheGameWrapper = document.getElementById('start');
const quizGameWrapper = document.getElementById('quiz');

let currentAnswerIndex = 0;
let currentQuestionIndex = 1;

function StartTheGame() {
    startTheGameWrapper.classList.add('disabled');
    quizGameWrapper.classList.remove('disabled');
    ResetUserInput();
    DisplayNextQuestion();
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
    if(quizDataModel) {
        if(userInputField.value === quizDataModel[0].answer[currentAnswerIndex]) {
            currentAnswerIndex++;
            currentQuestionIndex++;
            ResetUserInput();
            DisplayNextQuestion();
        } else {
            userInputField.style.borderColor = "red";
        }
    }
}







