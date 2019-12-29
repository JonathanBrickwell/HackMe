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
    questionText.innerHTML = questionsModel[currentAnswerIndex].question;
}

function IsCorrectAnswer() { 
    if(quizDataModel) {
        if(userInputField.value === quizDataModel[0].answer[currentAnswerIndex]) {
            console.log("True!");
            currentAnswerIndex++;
            ResetUserInput();
        } else {
            console.log("False!");
        }
    }
}

function ResetUserInput() {
    userInputField.value = "";
}






