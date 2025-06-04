const searchToggle = document.getElementById('search-icon-toggle');
const searchContainer = document.getElementById('mobile-search-container');

if (searchToggle && searchContainer) {
  searchToggle.addEventListener('click', () => {
    searchContainer.classList.toggle('hidden');
  });
}

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}