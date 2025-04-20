const searchToggle = document.getElementById('search-icon-toggle');
const searchContainer = document.getElementById('mobile-search-container');

searchToggle.addEventListener('click', () => {
  searchContainer.classList.toggle('hidden');
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});