document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');

    // Ikon váltás
    if (nav.classList.contains('open')) {
      menuToggle.innerHTML = '&times;'; // "×" jel az X-hez
      menuToggle.setAttribute('aria-label', 'Menü bezárása');
    } else {
      menuToggle.innerHTML = '&#9776;'; // hamburger menü
      menuToggle.setAttribute('aria-label', 'Menü megnyitása');
    }
  });
});