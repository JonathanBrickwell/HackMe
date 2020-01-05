document.addEventListener("DOMContentLoaded", function() {

    const db = firebase.firestore();
    const myQuizData = db.collection('answers').doc('quiz_data');

    myQuizData.get().then(function(collection) {
        if(collection.exists) {
            const data = collection.data();
            QuizDataModel(data);
            quizDataModel.push(new QuizDataModel(data));
        } else {
            console.log("No such document exists in the database");
        }  
    }).catch(function(error) {
        console.log("There seems to be an error: ", error);
    });
});
const quizDataModel = [];

function QuizDataModel(answer) {
    this.answer = answer;
}
var questionsModel = [
    {
        question: "This is a so called dummy question." + "<br>" + "<p class='small'><b>Hint</b>: <i>this.password = ' '</i></p>"
    },
    {
        question: "This text is the password." + "<br>" + "<p class='small'><b>Hint</b>: <i>sentence.SubArray(5, 4);</i></p>"
    },
    {
        question: "This text is the password." + "<br>" + "<p class='small'><b>Hint</b>: <i>This time the previous password is encrypted. Don't be sha to be the one that's going to find it.</i></p>"
    },
    {
        question: "This time the password is hidden within this page." + "<br>" + "<p class='small'><b>Hint</b>: <i>I am revealed when inspected.</i>" + "<!-- <span>Password: w-12..---</span>--></p>"
    },
    {
        question: "The admin is more careful now. He stores the passwords within a database.js file." + "<p class='small'><b>Hint: </b><i>Even though he ensured they're encrypted, he didn't invest enough time to hide the file...</i></p>"
    }
]


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
        endgameComponent.init();
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








var header = (function() {

    var _headerDesign = function() {
        var html = '';

        html += '<div class="pos-f-t">';
        html += '<div class="collapse" id="navbarToggleExternalContent">';
        html += '<div class="p-4">';
        html += '<ul class="navbar-nav mr-auto mt-2 mt-lg-0">';
        html += '<li class="nav-item">';
        html += '<a class="text-white nav-link" href="index.html">Home</a>';
        html += '</li>';
        html += '<li class="nav-item">';
        html += '<a class="text-white nav-link" href="about.html">About This App</a>';
        html += '</li>';
        html += '<li class="nav-item">';
        html += '<a class="text-white nav-link" href="#" onclick="googleLogin()">Login</a>';
        html += '</li>';
        html += '<li class="nav-item logout">';
        html += '<a class="text-white nav-link" href="#" onclick="googleLogout()">Logout</a>';
        html += '</li>';
        html += '</ul>';
        html += '</div>';
        html += '</div>';

        html += '<nav class="navbar navbar-dark">';
        html += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">';
        html += '<span class="navbar-toggler-icon"></span>';
        html += '</button>';

        html += '<div class="logged-in">';
        html += '<span class="text-small text-white pr-3" id="username"></span>';

        html += '<div class="dropdown show">';
        html += '<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
        html += '<img class="img-fluid profile-picture" src="" alt="Logged In User Profile Picture" />';
        html += '</a>';
        html += '<div class="dropdown-menu dropdown-menu-right align-center" aria-labelledby="dropdownMenuLink">';
        html += '<img class="img-fluid dropdown-profile-picture" src="" alt="Dropdown Profile Picture" />';
        html += '<p class="text-small font-weight-bold dropdown-username"></p>';
        html += '<p class="text-small dropdown-email"></p>';
        html += '<p class="text-small dropdown-email"></p>';
        html += '</div>';
        html += '</div>';

        html += '<span class="text-small text-white pr-2" id="loader">Loading your profile...</span>';
        html += '</div>';

        html += '</nav>';
        html += '</div>';

        return html;
    }

    var render = function() {
        var headerContainer = document.querySelector('header');
        headerContainer.innerHTML = _headerDesign();
    }

    return {
        init: render
    }

})();

header.init();
var endgameComponent = (function() {

    var endgameScreenStructure = function() {
        var html = "";

        html += '<div class="container">';
        html += '<div class="row">';
        html += '<div class="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5">';
        html += '<div class="card card-signin my-5">';
        html += '<div class="card-body">';
        html += '<h3 class="card-title text-center">Congratulations!';
        html += '<img src="assets/img/icons/champagne.png"/>';
        html += '</h3>';
        html += '<p class="text-center">You successfully passed this quiz!</p>';
        html += '<p class="text-center">Make sure to stay updated on the new features.</p>';
        html += '<p class="text-center">New questions are in preparation as well as the highscore board, login options to save your data, view instructional materials and suggesting improvements through our contact center.</p>';
        html += '<p class="text-center">Thank you a lot for playing, have a nice day! </p>';
        html += '</div></div></div></div></div>';

        return html;
    }

    var renderEndgameScreen = function() {
        var endgameScreen = document.getElementById('endgame');
        endgameScreen.innerHTML = endgameScreenStructure();
    }

    return {
        init: renderEndgameScreen
    }

})();
let userName = document.getElementById('username');

let loggedInNavbar = document.querySelector('.logged-in');
let profilePicture = document.querySelector('.profile-picture');
let logoutBtn = document.querySelector('.logout');

let dropdownProfilePicture = document.querySelector('.dropdown-profile-picture');
let dropdownUsername = document.querySelector('.dropdown-username');
let dropdownEmail = document.querySelector('.dropdown-email');

function googleLogin() {

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
    .signInWithPopup(provider)
    .then(function(result) {
        var user = result.user;
        successfulLogin(user);
      })
    .catch(function(error) {
        console.log("There has been an error: ", error);
      });      
}

function successfulLogin(userID) {

    if(userID != null) {
        loggedInNavbar.style.display = "flex";
        logoutBtn.style.display = "block";
        profilePicture.src = userID.photoURL;
        userName.innerHTML = "Hello, " + userID.displayName;

        dropdownProfilePicture.src = userID.photoURL;
        dropdownUsername.innerHTML = userID.displayName;
        dropdownEmail.innerHTML = userID.email;
    } else {
        console.log("User is logged out.");
    }
}

function googleLogout() {
    firebase.auth().signOut().then(function() {
        loggedInNavbar.style.display = "none";
        logoutBtn.style.display = "none";
            console.log("User is successfully logged out.");
      })
    .catch(function(error) {
        console.log("There has been an error: ", error);
      });      
}
let isLoaderActive = false;
let loader = document.getElementById('loader');

document.addEventListener("DOMContentLoaded", function() {

    if(isLoaderActive == true) {
        loader.style.display = "block;"
    } else {
        loader.style.display = "none";
    }

    function isLoggedIn() {
        isLoaderActive = true;
        firebase.auth().onAuthStateChanged(function(user) {
            if(user) {
                successfulLogin(user);
                setTimeout(function() { isLoaderActive = false; }, 2000); 
            } else {
                firebase.auth().signOut();
            }
        });
    }
    isLoggedIn();
});