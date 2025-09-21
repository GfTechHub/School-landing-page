// Basic interactivity for the skeleton

// 1) Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;
});

// 2) Smooth scroll for internal links (works for modern browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // only handle if target exists on page
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // close navbar on mobile after click
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navCollapse = document.querySelector('.navbar-collapse');
      if (navCollapse && navCollapse.classList.contains('show') && navbarToggler) {
        navbarToggler.click();
      }
    }
  });
});

// 3) Basic HTML5 form validation stub (no backend)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    if (!contactForm.checkValidity()) {
      e.preventDefault();
      contactForm.classList.add('was-validated');
    } else {
      e.preventDefault(); // remove this when you hook to a backend
      alert('Thanks! Form submission is currently a demo. Hook up your backend to receive submissions.');
    }
  });
}