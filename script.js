// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Project Hover Animation
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('active'));
  card.addEventListener('mouseleave', () => card.classList.remove('active'));
});

// Form Validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  // Get form fields
  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const message = form.querySelector('textarea[name="message"]');

  // Basic validation
  if (!name.value || !email.value || !message.value) {
    e.preventDefault(); // Stop form from submitting
    alert('⚠️ Please fill in all fields.');
    return;
  }

  // Check email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    e.preventDefault();
    alert('⚠️ Please enter a valid email address.');
    return;
  }

  // Optional: Success message before redirect
  alert(`✅ Thank you, ${name.value}! Your message is being sent.`);
});

// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
