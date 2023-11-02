document.querySelectorAll('.timeline-event').forEach(event => {
  event.addEventListener('click', function() {

      // temporarily cache the date and description texts
      var eventDate = this.querySelector('.timeline-date').innerText;
      var eventDescription = this.querySelector('.timeline-description').innerText;

      // Set the content of the modal headers
      document.getElementById('modalDate').innerText = eventDate;
      document.getElementById('modalDescription').innerText = eventDescription;
    
      // Put the explanation of the event into the body of the modal 
      document.getElementById('eventDetails').innerText = this.dataset.eventInfo;

      // Display the modal when clicking the blue circle
      document.getElementById('eventModal').style.display = 'block';
  });
});

document.getElementsByClassName('close')[0].onclick = function() {
  // close the modal when clicking on the x
  document.getElementById('eventModal').style.display = 'none';
}
  