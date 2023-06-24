// Set the release date for the countdown (year, month (0-based), day, hour, minute, second)
const releaseDate = new Date(2023, 6, 1, 12, 0, 0);

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  // Calculate the days, hours, minutes, and seconds left
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the countdown elements on the page
  document.getElementById("days").innerText = formatTime(days);
  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);
}

// Function to format the time values (add leading zeros)
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial update of the countdown
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Existing JavaScript Code Here

// Open the modal when the "About" button is clicked
document.querySelector('#about-modal-button').addEventListener('click', function () {
  document.querySelector('#about-modal').style.display = 'block';
});

// Close the modal when the close button is clicked
document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('#about-modal').style.display = 'none';
});
