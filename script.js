const movingButton = document.getElementById('movingButton');

function moveButton() {
  const container = document.querySelector('.button-container');
  const maxX = container.clientWidth - movingButton.clientWidth;
  const maxY = container.clientHeight - movingButton.clientHeight;

  // Increase the movement range (e.g., multiply by 2 to double the range)
  const rangeMultiplier = 6;
  const newX = Math.floor(Math.random() * maxX * rangeMultiplier);
  const newY = Math.floor(Math.random() * maxY * rangeMultiplier);

  movingButton.style.left = newX + 'px';
  movingButton.style.top = newY + 'px';
}

movingButton.addEventListener('mouseover', moveButton);
movingButton.addEventListener('touchstart', moveButton);
