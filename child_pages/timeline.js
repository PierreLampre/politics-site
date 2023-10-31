function displayEventInfo(eventId) {
  const eventInfo = document.getElementById('eventInfo');
  switch (eventId) {
      case 'event1':
          eventInfo.innerHTML = "Details for Event 1.";
          break;
      case 'event2':
          eventInfo.innerHTML = "Details for Event 2.";
          break;
      case 'event3':
          eventInfo.innerHTML = "Details for Event 3.";
          break;
      // Add more cases as needed
      default:
          eventInfo.innerHTML = "";
          break;
  }
}
  