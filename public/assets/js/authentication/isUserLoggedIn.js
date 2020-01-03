let isLoaderActive = false;
let loader = document.getElementById('loader');

document.addEventListener("DOMContentLoaded", function() {

    function isLoggedIn() {
        firebase.auth().onAuthStateChanged(function(user) {
            if(!user) {
                firebase.auth().signOut();
            } else {
                successfulLogin(user);
            }
        });
    }
    isLoggedIn();
});