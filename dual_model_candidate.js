//Dual Modal Candidate script

let Modal1 = document.getElementById('Modal1');
let Modal2 = document.getElementById('Modal2');
let videoSummary = document.getElementById('quick-summary-reopen');
let actualVideo = document.getElementById('rating-exp');
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
    Modal1.style.display = 'grid';
    Modal1.showModal();
}

actualVideo.onclick = () => {
    Modal2.style.display = 'grid';
    Modal2.showModal();
}
