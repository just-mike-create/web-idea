// 1. Top Right Menu Toggle
const menuBtn = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle('show');
});

// Close menu when clicking anywhere outside
window.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('show')) {
    dropdownMenu.classList.remove('show');
  }
});

// 2. Services Banner Accordion Toggle
const servicesToggle = document.getElementById('servicesToggle');
const servicesContent = document.getElementById('servicesContent');
const accordionIcon = document.getElementById('accordionIcon');

servicesToggle.addEventListener('click', () => {
  servicesContent.classList.toggle('collapsed');
  if (servicesContent.classList.contains('collapsed')) {
    accordionIcon.textContent = '▼';
  } else {
    accordionIcon.textContent = '▲';
  }
});
