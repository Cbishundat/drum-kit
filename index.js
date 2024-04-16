const drumKitConfig = {
    'w': {image: 'crash.png', sound: 'crash.mp3'},
    'a': {image: 'kick.png', sound: 'kick-bass.mp3'},
    's': {image: 'snare.png', sound: 'snare.mp3'},
    'd': {image: 'tom1.png', sound: 'tom-1.mp3'},
    'j': {image: 'tom2.png', sound: 'tom-2.mp3'},
    'k': {image: 'tom3.png', sound: 'tom-3.mp3'},
    'l': {image: 'tom4.png', sound: 'tom-4.mp3'}
}; //links each image with each sound

let btns = document.querySelectorAll(".drum");  // Select all drum buttons

// Function to set up each drum button
function setupDrumButtons() {
    btns.forEach(button => {
        let key = button.classList[0];  // The first class name corresponds to the button key
        let drum = drumKitConfig[key];

        // Set the button background image to the corresponding drum image
        button.style.backgroundImage = `url('images/${drum.image}')`;
        button.style.backgroundSize = 'cover';  // the image fits in button area
        //button.textContent = ''; //removes letters on buttons to only show drum

        // Add a click event listener to each button
        button.addEventListener("click", () => playSound(drum.sound));
    });
}

// Function to play drum sound
function playSound(soundFile) {
    var audio = new Audio(`sounds/${soundFile}`);
    audio.play();
}

// Add keyboard functionality
function addKeyboardSupport() {
    document.addEventListener("keydown", event => {
        const key = event.key.toLowerCase();  //key is in lowercase as html file specifies
        if (drumKitConfig[key]) {
            playSound(drumKitConfig[key].sound);
        }
    });
}


// Initialize functions
addKeyboardSupport();
setupDrumButtons();