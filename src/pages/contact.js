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
            <a href="https://youtube.com" target="_blank" class="contact-social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M23.5 6.2c-.3-1-1-1.7-2-2C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.5.5c-1 .3-1.8 1.1-2 2C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.7 2 2 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.5c1-.3 1.8-1.1 2-2 .5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z"/></svg>
            </a>
            <a href="https://vimeo.com" target="_blank" class="contact-social-link" aria-label="Vimeo">
              <svg viewBox="0 0 24 24"><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.293 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/></svg>
            </a>
            <a href="https://behance.net" target="_blank" class="contact-social-link" aria-label="Behance">
              <svg viewBox="0 0 24 24"><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.34.5-.84.88-1.503 1.14.872.228 1.527.67 1.957 1.33.43.66.645 1.45.645 2.36 0 .75-.15 1.42-.44 2-.297.58-.708 1.06-1.228 1.44-.527.38-1.14.66-1.84.83-.7.17-1.43.26-2.186.26H0V4.51h6.938v-.007zM6.545 10.2c.6 0 1.1-.16 1.46-.48.37-.32.555-.79.555-1.39 0-.35-.065-.64-.2-.87-.13-.23-.32-.41-.556-.53-.24-.12-.51-.2-.84-.24-.32-.04-.66-.06-1.01-.06H3.09v3.57h3.454v.01zm.1 5.7c.38 0 .74-.04 1.08-.1.34-.07.64-.2.9-.37.26-.18.47-.41.62-.7.15-.29.22-.66.22-1.1 0-.87-.24-1.49-.73-1.84-.5-.36-1.14-.54-1.92-.54H3.09v4.65h3.555zM21.57 8.29h-6.57v-1.6h6.57v1.6zm-3.22 2.17c-.69 0-1.24.22-1.66.66-.42.44-.68 1.06-.77 1.84h4.6c-.07-.83-.32-1.44-.73-1.85-.4-.41-.9-.61-1.44-.65zM18.48 18c.95 0 1.68-.22 2.2-.67.52-.44.87-1.04 1.05-1.79h2.77c-.45 1.66-1.24 2.88-2.37 3.67-1.13.79-2.5 1.18-4.12 1.18-1.12 0-2.1-.18-2.96-.55-.86-.37-1.58-.89-2.16-1.55-.58-.66-1.01-1.44-1.3-2.35-.29-.91-.44-1.9-.44-2.97 0-1.02.15-1.97.46-2.84.31-.87.75-1.63 1.33-2.27.58-.64 1.28-1.14 2.12-1.5.84-.36 1.78-.54 2.83-.54 1.17 0 2.17.22 3.01.67.84.44 1.52 1.04 2.04 1.79.52.75.9 1.6 1.12 2.56.22.96.3 1.97.23 3.03h-7.7c-.02.95.27 1.73.86 2.35.59.63 1.38.94 2.38.94l-.04.04z"/></svg>
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

      <div class="contact-map-section fade-in-up">
        <div class="contact-map">
          <div class="map-placeholder">
            <div class="map-placeholder-icon">📍</div>
            <div class="map-placeholder-text">Negombo, Sri Lanka</div>
          </div>
        </div>
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
