//show and hide elections nav section

let electionsNav = document.querySelector('.elections-dropdown-links');
let hoverAction = document.getElementById('navBoxToggle');



hoverAction.onmouseover = function () {
    electionsNav.style.display = "flex";
}

hoverAction.onmouseout = function () {
    electionsNav.style.display = "none";
}

electionsNav.onmouseover = function () {
    electionsNav.style.display = "flex";
}

electionsNav.onmouseout = function () {
    electionsNav.style.display = "none";
}
