/*
  Main JavaScript for interactive functionality.  Handles the mobile
  navigation menu, portfolio filtering, simple contact form
  validation/feedback and dynamic year in the footer.  All code
  executes after the DOM has fully loaded.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
    // Toggle class on the toggle button itself for animation
    navToggle.classList.toggle('open');
  });
  // Close navigation on link click (mobile)
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Portfolio filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      button.classList.add('active');
      const filter = button.getAttribute('data-filter');
      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category') || '';
        // When filter is 'all', show everything; otherwise match substring
        if (filter === 'all' || category.toLowerCase().includes(filter.toLowerCase())) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Simple contact form handler
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    // Basic email validation (browser will also validate due to type="email")
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });

  // Set dynamic year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
});