// Function to delay and resolve with a message
async function delayAndShowMessage(delayTime, message) {
  // Use setTimeout to wait for the specified delay
  await new Promise((resolve) => setTimeout(resolve, delayTime));

  // Select the output div and display the message
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = message;
}

// Event listener for the button click
document.getElementById('btn').addEventListener('click', async () => {
  // Get the user-provided text and delay values
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value);

  // Call the delayAndShowMessage function
  await delayAndShowMessage(delay, text);
});

