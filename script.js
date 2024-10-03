function displayPhrase() {
  const input = document.getElementById("inputField").value;
  const outputDiv = document.getElementById("output");
  let phrase = "";

  switch (input) {
    case "1":
      phrase =
        "Hi {requestor}! Thanks for submitting a ticket. We will investigate this and provide any updates. Thanks!";
      break;
    case "2":
      phrase = "Hello! Your request has been received and is being reviewed.";
      break;
    case "3":
      phrase = "Come up with something else here";
      break;
    default:
      phrase = phrase = "Invalid selection. Please enter a valid number.";
  }

  outputDiv.textContent = phrase;
}
