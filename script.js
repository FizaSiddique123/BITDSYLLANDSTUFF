// =======================
// Smooth scrolling for internal nav links
// =======================
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

// =======================
// Vercel Analytics Integration for Static Sites
// =======================
// Add this to enable traffic tracking without React or Next.js.
// This script will send page view data to your Vercel Analytics dashboard.

(function () {
  const vercelScript = document.createElement('script');
  vercelScript.src = 'https://vercel.com/analytics/script.js';
  vercelScript.defer = true;
  document.head.appendChild(vercelScript);
})();