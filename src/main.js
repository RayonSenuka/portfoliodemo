// Styles
import './styles/global.css';
import './styles/home.css';
import './styles/about.css';
import './styles/portfolio.css';
import './styles/contact.css';

// Router
import { Router } from './router.js';

// Pages
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderPortfolio } from './pages/portfolio.js';
import { renderContact } from './pages/contact.js';

// ===== LOADER =====
function initLoader() {
  const loader = document.getElementById('loader');
  const progress = loader.querySelector('.loader-progress');
  const barFill = loader.querySelector('.loader-bar-fill');

  // Skip loader if already shown this session
  if (sessionStorage.getItem('loaderShown')) {
    loader.classList.add('loaded');
    initRouter();
    return;
  }

  let count = 0;
  const interval = setInterval(() => {
    count += 5; // steady fast increments
    if (count >= 100) {
      count = 100;
      clearInterval(interval);
      progress.textContent = '100';
      barFill.style.width = '100%';
      sessionStorage.setItem('loaderShown', '1');

      setTimeout(() => {
        loader.classList.add('loaded');
        initRouter();
      }, 400);
    } else {
      progress.textContent = Math.floor(count);
      barFill.style.width = count + '%';
    }
  }, 40);
}

// ===== CUSTOM CURSOR =====
function initCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const dot = document.querySelector('.custom-cursor-dot');
  
  if (!cursor || !dot) return;
  
  // Check for touch device
  if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    dot.style.display = 'none';
    return;
  }
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Dot follows immediately
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });
  
  // Smooth cursor follow
  function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.15;
    cursorY += dy * 0.15;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  
  // Hover effects
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .featured-card, .project-thumbnail-frame')) {
      cursor.classList.add('hover');
    }
  });
  
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .featured-card, .project-thumbnail-frame')) {
      cursor.classList.remove('hover');
    }
  });
}

// ===== NAVIGATION =====
function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('nav-overlay');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    overlay.classList.toggle('open');
    
    // Prevent body scroll when overlay is open
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
  });
  
  // Close on nav link click
  overlay.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ===== ROUTER =====
function initRouter() {
  new Router([
    { path: '/', render: renderHome },
    { path: '/about', render: renderAbout },
    { path: '/portfolio', render: renderPortfolio },
    { path: '/contact', render: renderContact },
  ]);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavigation();
  initLoader();
});
