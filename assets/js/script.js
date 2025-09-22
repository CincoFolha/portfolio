
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const logo = document.querySelector('.logo');
  const links = document.querySelectorAll('.nav-links a');

  const scrollPosition = window.scrollY;
  const scrollThreshold = 100;

  if (scrollPosition > scrollThreshold) {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.backdropFilter = 'blur(20px)';
    logo.style.color = '#333';
    links.forEach(link => {
      link.style.color = '#333'
    });
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.1)';
    header.style.backdropFilter = 'blur(10px)';
    logo.style.color = 'white';
    links.forEach(link => {
      link.style.color = 'white';
    });
  }
});
