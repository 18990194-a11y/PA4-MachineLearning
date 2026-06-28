document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const header = document.querySelector('.header');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 80) {
      header.style.boxShadow = '0 1px 20px rgba(0, 0, 0, 0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
  });
});
