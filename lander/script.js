const terminal = document.getElementById("terminal-text");
const cursor = document.getElementById("cursor");
const launchBtn = document.querySelector('.launch-btn');

// Terminal messages
const messages = [
  "Initializing system...",
  "Loading modules...",
  "Checking dependencies...",
  "Connecting to network...",
  "Verifying security protocols...",
  "Establishing connection...",
  "System ready.",
  "Welcome to DevLabs.",
  "> "
];

let currentLine = 0;
let currentChar = 0;
let isTyping = true;

function typeWriter() {
  if (currentLine < messages.length) {
    if (currentChar < messages[currentLine].length) {
      terminal.textContent += messages[currentLine].charAt(currentChar);
      currentChar++;
      setTimeout(typeWriter, 10);
    } else {
      terminal.textContent += "\n";
      currentLine++;
      currentChar = 0;
      setTimeout(typeWriter, 10);
    }
  } else {
    isTyping = false;
    cursor.style.display = "none";
    launchBtn.classList.add('animate-button');
  }
}

// Start the typing animation
typeWriter(); 