let userName = document.getElementById('username');
let loggedInNavbar = document.querySelector('.logged-in');
let profilePicture = document.querySelector('.profile-picture');
let logoutBtn = document.querySelector('.logout');

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