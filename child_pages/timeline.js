function displayEventInfo(eventId) {
  const eventInfo = document.getElementById('eventInfo');
  switch (eventId) {
      case 'event1':
          eventInfo.innerHTML = "On June 2nd I received a sample primary ballot in the mail. Having been increasingly interested in politics over the years, I decided to do some research on the candidates before casting my vote. However, there was no direction to a website or any other source of information included on the sample ballot. So I decided to do some google searching and still came up empty handed. I then decided to see if I could find the candidates contact information online and message them directly. After messaging all of the candidates who had contact info online, only one replied indicating that they did not have a website yet. So on June 2nd, I casted a blind, ignorant vote.";
          break;
      case 'event2':
          eventInfo.innerHTML = "Details for Event 2.";
          break;
      case 'event3':
          eventInfo.innerHTML = "After spending months pro-actively searching for comprehensive candidate info, I ultimately only had about half the information I really needed to feel as though I was truly informed. So I made my voting decision with many unanswered questions and lots of speculatively form opinions.";
          break;
      // Add more cases as needed
      default:
          eventInfo.innerHTML = "";
          break;
  }
}
  