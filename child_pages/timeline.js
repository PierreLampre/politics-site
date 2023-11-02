document.querySelectorAll('.timeline-event').forEach(event => {
  event.addEventListener('click', function() {

      // temporarily cache the date and description texts
      var eventDate = this.querySelector('.timeline-date').innerText;
      var eventDescription = this.querySelector('.timeline-description').innerText;
      console.log("eventDate: " + eventDate);
      console.log("eventDescription: " + eventDescription);

      // Set the content of the modal headers
      document.getElementById('modalDate').innerText = eventDate;
      document.getElementById('modalDescription').innerText = eventDescription;
    
      // Put the explanation of the event into the body of the modal 
      document.getElementById('eventDetails').innerText = this.dataset.eventInfo;

      // Display the modal when clicking the blue circle
      document.getElementById('eventModal').style.display = 'block';

      var modalContent = document.querySelector('.modal-content');
      modalContent.style.display = 'block'; // Make sure the content is displayed
      setTimeout(() => { // Timeout to allow the display property to take effect
        modalContent.classList.add('show-modal'); // Add class to start the transition
      }, 10); // A slight delay is sometimes necessary for the transition to trigger
      
  });
});

// Close modal logic
var closeButton = document.querySelector('.close');
closeButton.onclick = function() {
  var modalContent = document.querySelector('.modal-content');
  // modalContent.classList.remove('show-modal'); // Hide the modal by scaling down
  modalContent.style.display = 'none'; // Hide the content after the transition
};
  