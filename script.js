document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // 1. Mobile Navigation Toggle
  navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
      navToggle.setAttribute('aria-expanded', !isExpanded);
      
      // Change icon (optional)
      const icon = navToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times'); // Use 'fa-times' for the close icon
  });
  
  // 2. Simple Scroll Animation (optional, for the tags)
  const tags = document.querySelectorAll('.tag');
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  tags.forEach(tag => {
      tag.style.opacity = 0; // Hide initially
      observer.observe(tag);
  });
});