//show and hide elections nav section

let electionsNav = document.querySelector('.elections-dropdown-links');
let hoverAction = document.getElementById('navBoxToggle');
let countyNav = document.querySelector('.county-dropdown-links');
let hoverAction2 = document.getElementById('navBoxToggle2');



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
//next dropdown

hoverAction2.onmouseover = function () {
    countyNav.style.display = "flex";
}

hoverAction2.onmouseout = function () {
    countyNav.style.display = "none";
}

countyNav.onmouseover = function () {
    countyNav.style.display = "flex";
}

countyNav.onmouseout = function () {
    countyNav.style.display = "none";
}

//Homepage dual modal options for banner

//Common Modal Script

let Modal1 = document.getElementById('Modal1');
let Modal2 = document.getElementById('Modal2');
let videoSummary = document.getElementById('videoSummary');
let actualVideo = document.getElementById('actualVideo');
let close1 = document.getElementById('close1');
let close2 = document.getElementById('close2');

close1.onclick = () => {
    Modal1.close();
    Modal1.style.display = 'none';
}

close2.onclick = () => {
    Modal2.close();
    Modal2.style.display = 'none';
}

videoSummary.onclick = () => {
    console.log("video summary click recognized");
    Modal1.style.display = 'grid';
    Modal1.showModal();
}

actualVideo.onclick = () => {
    console.log("actual video click recognized");
    Modal2.style.display = 'grid';
    Modal2.showModal();
}
