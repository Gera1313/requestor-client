// displaySentence function is called when the user clicks the "Submit" button. 
function displaySentence() {
    // Gets the number the user types in the input field.
  const input = document.getElementById("inputField").value;
  // Gets HTML element with id "output"
  const outputDiv = document.getElementById("output");
  // Variable holds the message that will show based on user's input
  let phrase = "";

  // Switch statement checks the user's input and selects the message. 
  switch (input) {
    // If user enters 1, the webpage displays this sentence and so on...
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
      // Error message. If the user selects an option not available. 
    default:
      phrase = "Invalid selection. Please enter a valid number.";
  }

  // Displays the selected message inside of the "output" area on the page. 
  outputDiv.textContent = phrase;
}