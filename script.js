// script.js

// Get references to elements
const key = document.querySelector('#key');
const lockedDoor = document.querySelector('#lockedDoor');
const player = document.querySelector('#player');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const rotatingObject = document.querySelector('#rotatingObject');
const hiddenKey = document.querySelector('#hiddenKey');
const lever = document.querySelector('#lever');
const colorTarget = document.querySelector('#colorTarget');
const sphere1 = document.querySelector('#sphere1');
const sphere2 = document.querySelector('#sphere2');
const sphere3 = document.querySelector('#sphere3');
const codeLock = document.querySelector('#codeLock');
const codeInput = document.querySelector('#codeInput');
const codeButton = document.querySelector('#codeButton');
const escapeMessage = document.createElement('a-text'); 

// Check if the key is picked up 
let hasKey = false;
let puzzle1Solved = false; 
let puzzle2Solved = false;
let puzzle3Solved = false;
let puzzle4Solved = false;

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
  if (hasKey && puzzle1Solved && puzzle2Solved && puzzle3Solved && puzzle4Solved) {
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
    console.log("The door is locked! Find the key and solve the puzzles.");
  }
}

// Function to handle clicking on button 1
function pressButton1() {
  console.log("Button 1 pressed!");
  // Rotate the cylinder
  rotatingObject.setAttribute('animation', 'property: rotation; to: 0 360 0; dur: 5000; easing: linear; loop: true'); 
  puzzle1Solved = true; 
}

// Function to handle clicking on button 2
function pressButton2() {
  console.log("Button 2 pressed!");
  // Move the lever up
  lever.setAttribute('position', '1.5 1 -3'); 
  puzzle2Solved = true; 
}

// Function to handle clicking on button 3
function pressButton3() {
  console.log("Button 3 pressed!");
  // Change the color of the sphere
  sphere1.setAttribute('color', '#0000FF'); // Set color to blue
  sphere2.setAttribute('color', '#00FF00'); // Set color to green
  sphere3.setAttribute('color', '#FF0000'); // Set color to red
  // Check if the colors match the target
  if (sphere1.getAttribute('color') === colorTarget.getAttribute('color')) {
    puzzle3Solved = true;
  }
}

// Function to handle clicking on the code button
function enterCode() {
  // Check if the code is correct (replace with your desired logic)
  if (codeInput.getAttribute('value') === '42') {
    // Unlock the code lock (e.g., change its color)
    codeLock.setAttribute('color', '#00FF00'); 
    puzzle4Solved = true;
  } else {
    // Provide feedback that the code is incorrect (e.g., shake the code lock)
    console.log("Incorrect code!");
  }
}

// Add event listeners for clicking on the key and door
key.addEventListener('click', pickUpKey);
lockedDoor.addEventListener('click', unlockDoor);
button1.addEventListener('click', pressButton1);
button2.addEventListener('click', pressButton2);
button3.addEventListener('click', pressButton3);
codeButton.addEventListener('click', enterCode);

// Event listener for player clicking on the key
player.addEventListener('click', function (event) {
  if (event.detail.intersectedEl.id === 'key' || event.detail.intersectedEl.id === 'hiddenKey') {
    pickUpKey();
  }
});
