
    const scrollRightButton = document.getElementById("scrollRightButton");
    let isScrolling = false;
    let scrollInterval;
    
    scrollRightButton.addEventListener("mousedown", () => {
      isScrolling = true;
      scrollInterval = setInterval(() => {
        // Adjust the 'scrollAmount' value as needed for the desired scroll speed and direction
        const scrollAmount = 500;
        window.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }, 10);
    });
    
    scrollRightButton.addEventListener("mouseup", () => {
      isScrolling = false;
      clearInterval(scrollInterval);
    });
    
    scrollRightButton.addEventListener("mouseout", () => {
      if (isScrolling) {
        isScrolling = false;
        clearInterval(scrollInterval);
      }
    });
    
  
const background = document.querySelector('.background');

function changeBackgroundColor() {
    // Generate a random color in hexadecimal format
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    background.style.backgroundColor = randomColor;

    // Call the function recursively after a certain interval (e.g., 5 seconds)
    setTimeout(changeBackgroundColor, 5000);
}

// Start the color-changing process
changeBackgroundColor();


// Function to add a message to the chatbox
function addMessage(message, isUser = false) {
  const chatbox = document.getElementById('chatbox-messages');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(isUser ? 'user-message' : 'assistant-message');
  messageDiv.textContent = message;
  chatbox.appendChild(messageDiv);

  // Scroll to the latest message
  chatbox.scrollTop = chatbox.scrollHeight;
}

document.getElementById('send-button').addEventListener('click', function() {
  const input = document.getElementById('message-input');
  const message = input.value;
  if (message.trim() !== '') {
      addMessage(message, true);
      // You can send the user message to a backend or process it here.
      input.value = '';
  }
});

// Example: Add a welcome message from the assistant
addMessage('Hello! How can I assist you today?');
