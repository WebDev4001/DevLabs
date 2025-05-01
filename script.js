// script.js
const terminal  = document.getElementById("terminal-text");
const cursor    = document.getElementById("cursor");
const popup     = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const logo      = document.getElementById("devlabs-logo");
const launchBtn = document.getElementById("launchBtn");

// pip-style messages
const pipSamples = [
  "Collecting flask",
  "Downloading flask-2.1.2.tar.gz (1.2 MB)",
  "Collecting click>=8.0",
  "Downloading click-8.1.3-py3-none-any.whl (96 kB)",
  "Collecting itsdangerous>=2.0",
  "Downloading itsdangerous-2.1.2.tar.gz (18 kB)",
  "Successfully installed click-8.1.3 flask-2.1.2 itsdangerous-2.1.2"
];
const finalLines = [
  "\n[✔] Program Initiation Successful",
  "\n\n\nLaunching Project DevLabs...\n\n\n\n\n\n"
];

// build 70 random + final
const allLines = [];
while (allLines.length < 70) {
  allLines.push(pipSamples[Math.floor(Math.random()*pipSamples.length)]);
}
allLines.push(...finalLines);

let idx = 0;
function typeLine(){
  if(idx < allLines.length){
    terminal.textContent += allLines[idx++] + "\n";
    terminal.parentNode.scrollTop = terminal.parentNode.scrollHeight;
    setTimeout(typeLine, 0.01);
  } else {
    cursor.style.display = "none";
    // wait 3s before showing popup
    setTimeout(showPopup, 300);
  }
}

function showPopup(){
  popup.classList.remove("hidden");
  popupText.textContent =
    "Program Initiation Successful\nLaunching Project DevLabs...";
  setTimeout(()=>{
    popup.classList.add("hidden");
    setTimeout(showLaunch, 500);
  }, 2500);
}

function showLaunch(){
  document.querySelector(".terminal-container").style.display = "none";
  logo.classList.remove("hidden");
  launchBtn.classList.remove("hidden");
  // then move & enlarge to cover
  setTimeout(()=> launchBtn.classList.add("move-center-full"), 100);
}

// start
typeLine();
