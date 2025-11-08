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

// Form Validation + AJAX Submission (NO REDIRECT)
const form = document.getElementById('contact-form');
const statusMsg = document.createElement('p');
statusMsg.id = "form-status";
statusMsg.style.display = "none";
statusMsg.style.marginTop = "10px";
statusMsg.style.color = "green";
form.appendChild(statusMsg);

form.addEventListener('submit', async e => {
  e.preventDefault(); // Stop redirect

  // Get form fields
  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const message = form.querySelector('textarea[name="message"]');

  // Basic validation
  if (!name.value || !email.value || !message.value) {
    alert('⚠️ Please fill in all fields.');
    return;
  }

  // Check email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    alert('⚠️ Please enter a valid email address.');
    return;
  }

  // Send form via Formspree (AJAX)
  const formData = new FormData(form);

  const response = await fetch("https://formspree.io/f/xldoyqya", {
    method: "POST",
    body: formData,
    headers: { "Accept": "application/json" }
  });

  if (response.ok) {
    // Show success message
    statusMsg.textContent = "✅ Message sent successfully!";
    statusMsg.style.color = "green";
    statusMsg.style.display = "block";

    // Clear fields
    form.reset();

    // Hide after 3 seconds
    setTimeout(() => {
      statusMsg.style.display = "none";
    }, 3000);
  } else {
    statusMsg.textContent = "❌ Failed to send message. Please try again.";
    statusMsg.style.color = "red";
    statusMsg.style.display = "block";
  }
});

// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
