import { initScrollAnimations } from '../animations.js';

export function renderContact(container) {
  container.innerHTML = `
    <div class="contact">
      <div class="contact-header">
        <h1 class="contact-title fade-in-up">Get In Touch</h1>
        <p class="contact-subtitle fade-in-up">Let's Create Something Together</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info stagger-children">
          <div class="contact-info-block">
            <span class="contact-info-label">Email</span>
            <a href="mailto:minuex007@gmail.com" class="contact-info-value">minuex007@gmail.com</a>
          </div>
          <div class="contact-info-block">
            <span class="contact-info-label">Phone</span>
            <a href="tel:+94774757778" class="contact-info-value">077 475 7778</a>
          </div>
          <div class="contact-info-block">
            <span class="contact-info-label">Location</span>
            <span class="contact-info-value">Negombo, Sri Lanka</span>
          </div>
          <div class="contact-info-block">
            <span class="contact-info-label">Availability</span>
            <span class="contact-info-value">Open for Projects</span>
          </div>
          <div class="contact-social">
            <a href="https://www.instagram.com/minu.ex" target="_blank" class="contact-social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <!--<a href="https://youtube.com" target="_blank" class="contact-social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M23.5 6.2c-.3-1-1-1.7-2-2C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.5.5c-1 .3-1.8 1.1-2 2C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.7 2 2 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.5c1-.3 1.8-1.1 2-2 .5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z"/></svg>
            </a>
            <!--<a href="https://vimeo.com" target="_blank" class="contact-social-link" aria-label="Vimeo">
              <svg viewBox="0 0 24 24"><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.293 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/></svg>
            </a>-->
            <a href="https://behance.net" target="_blank" class="contact-social-link" aria-label="Behance">
              <svg viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.908 5.375 5.435h-7.75c.144 2.148 2.016 3.328 4.14 2.898.816-.164 1.583-.585 2.155-1.127l1.279 1.389zm-5.466-4.991c-1.393 0-2.392.868-2.671 2.073h5.051c-.221-1.335-1.233-2.073-2.38-2.073zm-10.741-9.009h-7.519v20h7.525c5.385 0 7.749-3.411 7.749-6.903 0-2.18-1.355-4.545-3.522-5.187 1.769-.739 2.768-2.484 2.768-4.526 0-3.136-2.583-5.384-6.91-5.384zm-4.519 16.903v-6.31h4.015c2.316 0 4.16.892 4.16 3.09 0 2.32-2.128 3.22-4.148 3.22h-4.027zm0-9v-4.804h3.692c1.944 0 3.398.665 3.398 2.348 0 1.838-1.571 2.456-3.328 2.456h-3.762z"/></svg>
            </a>
          </div>
        </div>
        
        <form class="contact-form" id="contact-form">
          <div class="form-group fade-in-up">
            <input type="text" id="name" name="name" placeholder=" " required />
            <label for="name">Your Name</label>
          </div>
          <div class="form-group fade-in-up">
            <input type="email" id="email" name="email" placeholder=" " required />
            <label for="email">Email Address</label>
          </div>
          <div class="form-group fade-in-up">
            <input type="text" id="subject" name="subject" placeholder=" " required />
            <label for="subject">Subject</label>
          </div>
          <div class="form-group fade-in-up">
            <textarea id="message" name="message" placeholder=" " required></textarea>
            <label for="message">Your Message</label>
          </div>
          <button type="submit" class="form-submit fade-in-up">Send Message</button>
        </form>
      </div>
    </div>
  `;

  // Form submit handler
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = 'var(--accent)';
    btn.style.color = 'var(--bg-primary)';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.style.color = '';
      form.reset();
    }, 3000);
  });

  // Init scroll animations
  setTimeout(() => initScrollAnimations(), 500);
}
