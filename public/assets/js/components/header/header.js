var header = (function() {

    var _headerDesign = function() {
        var html = '';

        html += '<nav role="navigation">';
        html += '<div id="menuToggle">';
        html += '<input type="checkbox" />';
        html += '<span></span>';
        html += '<span></span>';
        html += '<span></span>';
        html += '<ul id="menu">';
        html += '<a href="index.html"><li>Home</li></a>';
        html += '<a href="about.html"><li>About</li></a>';
        html += '<a href="#"><li>Login</li></a>';
        html += '<a href="#"><li>Contact</li></a>';
        html += '<a href="https://github.com/JonathanBrickwell/HackMe" target="_blank">';
        html += '<li>Github <img src="assets/img/icons/github-logo.png" alt="Github Brand Logo"></li>';
        html += '</a>';
        html += '</ul>';
        html += '</div>';
        html += '</nav>';

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