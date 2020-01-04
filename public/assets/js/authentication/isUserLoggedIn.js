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