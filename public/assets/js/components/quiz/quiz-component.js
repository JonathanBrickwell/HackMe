
let userInput = "";
let userInputField = document.getElementById("userInput");


function QuizComponent(quizData) {
    this.quizData = quizData;
    var highScore = 0;
    var currentAnswerIndex = 0;
    var score = 0;
}

if(!production) {
    console.log("Ovo je komponenta: ", quizData);
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

function DisplayNextQuestion() {

}

function Init() {
    console.log(QuizComponent());
}


