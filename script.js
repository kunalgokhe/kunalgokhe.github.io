// Process names for the ML pipeline
const processNames = [
  "Data Collection",
  "Data Preprocessing",
  "Model Training",
  "Model Evaluation",
  "Model Deployment",
  "Monitoring and Maintenance"
];

const processElement = document.getElementById('process-name');
const progressLabel = document.getElementById('progress-label');
const scrollbarTrack = document.querySelector('.scrollbar-track');

// Padding for the scrollbar track
const trackPaddingTop = 70;  // Adjust the top padding of the track
const trackPaddingBottom = 10;  // Adjust the bottom padding of the track

// Function to update the process name and progress label based on scroll
window.addEventListener('scroll', () => {
  // Smooth scrolling: requestAnimationFrame for smoother scroll updates
  requestAnimationFrame(() => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Get the full height of the track, including padding
    const trackHeight = scrollbarTrack.offsetHeight;

    // Adjust track height to exclude padding
    const trackHeightWithoutPadding = trackHeight - trackPaddingTop - trackPaddingBottom;

    // Calculate scroll percentage
    const scrollPercentage = scrollPosition / documentHeight;

    // Determine the process name based on scroll percentage
    const processIndex = Math.min(
      Math.floor(scrollPercentage * processNames.length),
      processNames.length - 1
    );
    const currentProcess = processNames[processIndex];

    // Update the position of the process name based on scroll percentage
    const processTopPosition = trackPaddingTop + (scrollPercentage * trackHeightWithoutPadding);
    processElement.style.top = `${processTopPosition}px`;

    // Show the process name with a smooth transition
    processElement.textContent = currentProcess;
    processElement.classList.add('visible');

    // Update progress label with percentage
    const progressPercentage = Math.round(scrollPercentage * 100);
    progressLabel.textContent = `ML Workflow ${progressPercentage}%`;
  });
});

const names = ['GOKHE',     // Default English
  'गोखे', // Hindi
  'గోఖే', // Spanish
  'கோகே', // French
  '戈赫', // German
  '고케',
  'ゴケ' // Korean
];

const changingNameElement = document.getElementById('changingName');
// Apply smooth transition for opacity
changingNameElement.style.transition = 'opacity 1s ease-in-out';
changingNameElement.textContent = names[0];
let index = 1;
function changeName() {
  changingNameElement.style.opacity = 0.01; // Fade out
  setTimeout(() => {
      changingNameElement.textContent = names[index]; // Change name
      index = (index + 1) % names.length; // Loop through the names
      changingNameElement.style.opacity = 1; // Fade in
  }, 1000); // Wait for the fade-out to complete before changing the text
}

// Change the name every 3 seconds
setInterval(changeName,3000);

function playAudio() {
  var audio = document.getElementById('audio');
  audio.play();
}