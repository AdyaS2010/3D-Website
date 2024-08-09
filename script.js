// script.js

// Get references to elements
const key = document.querySelector('#key');
const lockedDoor = document.querySelector('#lockedDoor');
const player = document.querySelector('#player');
const button = document.querySelector('#button');
const escapeMessage = document.createElement('a-text'); // Create the escape message

// Check if the key is picked up 
let hasKey = false;
let puzzleSolved = false; // Track if the puzzle is solved

// Function to handle clicking on the key
function pickUpKey() {
  // Hide the key 
  key.setAttribute('visible', 'false'); 

  // Set the hasKey flag
  hasKey = true;

  // Optionally provide feedback to the player 
  console.log("You found the key!");
}

// Function to handle clicking on the door
function unlockDoor() {
  // Check if the player has the key and the puzzle is solved
  if (hasKey && puzzleSolved) {
    // Open the door 
    lockedDoor.setAttribute('color', '#00FF00'); 

    // Optionally provide feedback to the player 
    console.log("The door is unlocked!");

    // Display escape message
    escapeMessage.setAttribute('value', 'You Escaped!');
    escapeMessage.setAttribute('position', '0 2 -2');
    escapeMessage.setAttribute('color', 'green');
    escapeMessage.setAttribute('align', 'center');
    document.querySelector('a-scene').appendChild(escapeMessage); 
  } else {
    // Optionally provide feedback to the player 
    console.log("The door is locked! Find the key and solve the puzzle.");
  }
}

// Function to handle clicking on the button
function pressButton() {
  console.log("Button pressed!");
  // Add logic to change the scene (e.g., move an object, reveal a clue, etc.)
  puzzleSolved = true; // Mark the puzzle as solved
}

// Add event listeners for clicking on the key and door
key.addEventListener('click', pickUpKey);
lockedDoor.addEventListener('click', unlockDoor);
button.addEventListener('click', pressButton);

// Event listener for player clicking on the key
player.addEventListener('click', function (event) {
  if (event.detail.intersectedEl.id === 'key') {
    pickUpKey();
  }
});
