// ... (previous code)

// Add event listener for mouse click
document.querySelector('a-scene').addEventListener('click', function (event) {
  // Create a new box at the clicked position
  const box = document.createElement('a-box');
  box.setAttribute('color', 'blue');
  box.setAttribute('position', event.detail.intersection.point);
  document.querySelector('a-scene').appendChild(box);

  // Make the box spin
  box.setAttribute('animation', 'property: rotation; to: 0 360 0; dur: 5000; easing: linear; loop: true'); 
});