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