// script.js

// Get references to elements
const key = document.querySelector('#key');
const lockedDoor = document.querySelector('#lockedDoor');
const player = document.querySelector('#player');

// Check if the key is picked up (you can use an event listener for this)
let hasKey = false;

// Function to handle clicking on the key
function pickUpKey() {
  // Hide the key or change its appearance
  key.setAttribute('visible', 'false'); // Or change its color, texture, etc.

  // Set the hasKey flag
  hasKey = true;

  // Optionally provide feedback to the player (e.g., a message)
  console.log("You found the key!");
}

// Function to handle clicking on the door
function unlockDoor() {
  // Check if the player has the key
  if (hasKey) {
    // Open the door (change its appearance)
    lockedDoor.setAttribute('color', '#00FF00'); // Or change its position, texture, etc.

    // Optionally provide feedback to the player (e.g., a message)
    console.log("The door is unlocked!");

    // Add more logic for escaping (e.g., move the player)
  } else {
    // Optionally provide feedback to the player (e.g., a message)
    console.log("The door is locked! Find the key.");
  }
}

// Add event listeners for clicking on the key and door
key.addEventListener('click', pickUpKey);
lockedDoor.addEventListener('click', unlockDoor);

// Event listener for player clicking on the key
 player.addEventListener('click', function (event) {
   if (event.detail.intersectedEl.id === 'key') { 
     pickUpKey();
   }
 });

 // Get a reference to the button
 const button = document.querySelector('#button');

 // Function to handle clicking on the button
 function pressButton() {
   console.log("Button pressed!");
   // Add logic to change the scene (e.g., move an object, reveal a clue, etc.)
 }

 // Add event listener for clicking on the button
 button.addEventListener('click', pressButton);
