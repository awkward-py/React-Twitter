// JavaScript code to toggle dark mode
const body = document.body;
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

toggleDarkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
