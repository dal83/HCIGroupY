let countdown = 5; // Initial value
setInterval(function () {
  countdown--; // Decrement the value
  if (countdown >= 0) {
    // Update the content of the number-circle
    document.getElementById('countdown').textContent = countdown;
  } else {
    // Once countdown reaches 1, stop the interval
    clearInterval();
  }
}, 1000); // Repeat every one second (1000 milliseconds)
