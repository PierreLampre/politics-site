function displayEventInfo(eventId) {
  const eventInfo = document.getElementById('eventInfo');
  switch (eventId) {
      case 'event1':
          eventInfo.innerHTML = "On June 2nd I received a sample primary ballot in the mail. Having been increasingly interested in politics over the years, I decided to do some research on the candidates before casting my vote. However, there was no direction to a website or any other source of information included on the sample ballot. So I decided to do some google searching and still came up empty handed. I then decided to see if I could find the candidates contact information online and message them directly. After messaging all of the candidates who had contact info online, only one replied indicating that they did not have a website yet. So on June 2nd, I casted a blind, ignorant vote.";
          break;
      case 'event2':
          eventInfo.innerHTML = "Given that there would still be 5 months to learn about the candidates, I decided to follow through with a deeper dive to find candidate contact information. So for one week I looked for whatever emails and social media contacts I could find. After writing them all, I received no repsonses. Then the next week I tried all their phone numbers. No responses. Then the next week I wrote them all letters. No response. Feeling as though this might be turning into a story for the local paper and also feeling as though they may already be covering the election, I decided to try contacting our local paper, The Daily Journal. So I drove over to their building and found it vacant. Turns out they have been absorbed by a parent company. So I looked online and tried contacting all their email addresses and phone numbers. Also no response.";
          break;
      case 'event3':
          eventInfo.innerHTML = "On July 6th I wrote an email to Mayor Fanucci of Vineland and he responded the same day. We spoke on the phone the next day regarding my experience and he told me he would reach out to both parties regarding their need to be more accessible. The Republican Party reached out to me about a week later, where I was able to confirm I was able to attend a public bi-weekly breakfast, which would be my start to scratching the surface of candidate information. The Democrat party never reached out to me.";
          break;
      case 'event4':
          eventInfo.innerHTML = "After spending months pro-actively searching for comprehensive candidate info, I ultimately only had about half the information I really needed to feel as though I was truly informed. So I made my voting decision with many unanswered questions and lots of speculatively form opinions.";
          break;
      // Add more cases as needed
      default:
          eventInfo.innerHTML = "";
          break;
  }
}
  