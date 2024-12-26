let secondsPassed = 0;

function updateTime() {
  secondsPassed++;
  const timeDisplay = document.getElementById("time-display");
  timeDisplay.textContent = `${secondsPassed} ${secondsPassed === 1 ? 'second' : 'seconds'} have passed`;
}

// Update every second
setInterval(updateTime, 1000);