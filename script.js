// dark mode & light mode
const colorMode  = document.body;
const colorModeBtn = document.querySelector('.fa-solid');
const colorToggle = document.querySelector('.color-toggle');
const headerColor = document.getElementById('header');

colorModeBtn.addEventListener('click', colorChange);

function colorChange() {
    colorMode.classList.toggle('dark-mode');
    headerColor.classList.toggle('header-dark');

    if (colorMode.classList.contains('dark-mode')) {
        colorToggle.textContent = ' Light Mode';
    } else {
        colorToggle.textContent = ' Dark Mode';
    }
}