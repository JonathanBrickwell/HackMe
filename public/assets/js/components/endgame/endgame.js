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