// Initialize the SpeechSynthesis API
const synth = window.speechSynthesis;

// Get DOM elements
const textInput = document.getElementById('text-input');
const speakButton = document.getElementById('speak-button');

// Function to speak the entered text
function speakText() {
    const text = textInput.value;
    if (text !== '') {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }
}

// Event listener for the speak button
speakButton.addEventListener('click', speakText);
