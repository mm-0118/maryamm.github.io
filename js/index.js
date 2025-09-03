document.addEventListener("DOMContentLoaded", function () {
  
  /* identities runthrough */
  const identities = [
    "a physicist", "an artist", "a cultural theorist", "a programmer",
    "a visual artist", "a writer", "a researcher", "an art critic",
    "a poet", "a daydreamer", "an engineer"
  ];
  const identitySpan = document.querySelector(".identities");
  let index = 0;


  function updateIdentity() {
    identitySpan.textContent = identities[index];
    index = (index + 1) % identities.length;
  }

  setInterval(updateIdentity, 2000);
  updateIdentity();
  
  /* message submission */
  const messageSubmit = document.querySelector('input[type="submit"]');
  messageSubmit.addEventListener("click", messageSent);
  let email = "";
  let message = "";
  let name = "";

  function messageSent(event) {
    event.preventDefault(); 
    messageSubmit.value = "Your message has been sent! A homing pigeon will be on it shortly."
    messageSubmit.style.width = "30%";
    messageSubmit.style.fontStyle = "italic";
    messageSubmit.style.fontSize = "12px";
    messageSubmit.disabled = true;
    messageSubmit.style.fontFamily = "'Apple Garamond', serif";
    messageSubmit.style.textAlign = "center";
    messageSubmit.style.backgroundColor = "snow";
    email = document.querySelector.contactEmail.value;
    message = document.querySelector.contactMessage.value;
    name = document.querySelector.contactName.value;
  }


});