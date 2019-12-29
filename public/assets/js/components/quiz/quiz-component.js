const userInputField = document.getElementById("userInput");
const questionText = document.getElementById("question");

const startTheGameWrapper = document.getElementById('start');
const quizGameWrapper = document.getElementById('quiz');

let currentAnswerIndex = 0;

function StartTheGame() {
    startTheGameWrapper.classList.add('disabled');
    quizGameWrapper.classList.remove('disabled');
    ResetUserInput();
    DisplayNextQuestion();
}

function DisplayNextQuestion() {
    var html = "";
    html += currentAnswerIndex + 1 + ". Question " + "<br>";
    html +=  questionsModel[currentAnswerIndex].question;
    questionText.innerHTML = html;
}

function ResetUserInput() {
    userInputField.value = "";
}

function IsCorrectAnswer() { 
    if(quizDataModel) {
        if(userInputField.value === quizDataModel[0].answer[currentAnswerIndex]) {
            currentAnswerIndex++;
            ResetUserInput();
            DisplayNextQuestion();
        } else {
            userInputField.style.borderColor = "red";
        }
    }
}







