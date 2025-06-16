// Smooth scrolling for internal nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
