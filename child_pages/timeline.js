document.querySelectorAll('.timeline-event').forEach(event => {
  event.addEventListener('click', function() {
      document.getElementById('eventDetails').innerText = this.dataset.eventInfo;
      document.getElementById('eventModal').style.display = 'block';
  });
});

document.getElementsByClassName('close')[0].onclick = function() {
  document.getElementById('eventModal').style.display = 'none';
}
  