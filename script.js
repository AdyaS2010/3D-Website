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
const memoryCard1 = document.querySelector('#memoryCard1');
const memoryCard2 = document.querySelector('#memoryCard2');
const memoryCard3 = document.querySelector('#memoryCard3');
const memoryCard4 = document.querySelector('#memoryCard4');

// Check if the key is picked up 
let hasKey = false;
let puzzle1Solved = false; 
let puzzle2Solved = false;
let puzzle3Solved = false;
let puzzle4Solved = false;
let puzzle5Solved = false; // For Memory Matching
let memoryCard1Flipped = false; 
let memoryCard2Flipped = false;
let memoryCard3Flipped = false;
let memoryCard4Flipped = false;

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
  if (hasKey && puzzle1Solved && puzzle2Solved && puzzle3Solved && puzzle4Solved && puzzle5Solved) {
    // Open the door 
    lockedDoor.setAttribute('color', '#00FF00'); 

    // Optionally provide feedback to the player 
    console.log("The door is unlocked!");

    // Play unlock sound
    lockedDoor.components.sound.playSound();

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
  // Play button click sound
  button1.components.sound.playSound();
}

// Function to handle clicking on button 2
function pressButton2() {
  console.log("Button 2 pressed!");
  // Move the lever up
  lever.setAttribute('position', '1.5 1 -3'); 
  puzzle2Solved = true; 
  // Play lever sound
  lever.components.sound.playSound();
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
  // Play button click sound
  button3.components.sound.playSound();
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
  // Play button click sound
  codeButton.components.sound.playSound();
}

// Function to handle memory card clicks
function flipMemoryCard(card) {
  if (card.getAttribute('color') === '#888') { // If card is not flipped
    card.setAttribute('color', card.getAttribute('data-symbol') === 'circle' ? 'red' : 'green'); // Reveal the symbol's color
    if (card.id === 'memoryCard1') { memoryCard1Flipped = true; }
    if (card.id === 'memoryCard2') { memoryCard2Flipped = true; }
    if (card.id === 'memoryCard3') { memoryCard3Flipped = true; }
    if (card.id === 'memoryCard4') { memoryCard4Flipped = true; }
    checkMemoryMatch();
  } else {
    card.setAttribute('color', '#888'); // Flip back to hidden
    if (card.id === 'memoryCard1') { memoryCard1Flipped = false; }
    if (card.id === 'memoryCard2') { memoryCard2Flipped = false; }
    if (card.id === 'memoryCard3') { memoryCard3Flipped = false; }
    if (card.id === 'memoryCard4') { memoryCard4Flipped = false; }
  }
}

// Check for memory card matches
function checkMemoryMatch() {
  if (memoryCard1Flipped && memoryCard2Flipped && memoryCard3Flipped && memoryCard4Flipped) {
    if ((memoryCard1.getAttribute('data-symbol') === memoryCard2.getAttribute('data-symbol')) &&
        (memoryCard3.getAttribute('data-symbol') === memoryCard4.getAttribute('data-symbol'))) {
      puzzle5Solved = true;
      console.log("Memory Match Solved!");
    } else {
      console.log("Memory Match Incorrect!");
      memoryCard1Flipped = false;
      memoryCard2Flipped = false;
      memoryCard3Flipped = false;
      memoryCard4Flipped = false;
      memoryCard1.setAttribute('color', '#888');
      memoryCard2.setAttribute('color', '#888');
      memoryCard3.setAttribute('color', '#888');
      memoryCard4.setAttribute('color', '#888');
    }
  }
}

// Add event listeners for clicking on the key and door
key.addEventListener('click', pickUpKey);
lockedDoor.addEventListener('click', unlockDoor);
button1.addEventListener('click', pressButton1);
button2.addEventListener('click', pressButton2);
button3.addEventListener('click', pressButton3);
codeButton.addEventListener('click', enterCode);

memoryCard1.addEventListener('click', () => flipMemoryCard(memoryCard1));
memoryCard2.addEventListener('click', () => flipMemoryCard(memoryCard2));
memoryCard3.addEventListener('click', () => flipMemoryCard(memoryCard3));
memoryCard4.addEventListener('click', () => flipMemoryCard(memoryCard4));

// Event listener for player clicking on the key
player.addEventListener('click', function (event) {
  if (event.detail.intersectedEl.id === 'key' || event.detail.intersectedEl.id === 'hiddenKey') {
    pickUpKey();
  }
});
