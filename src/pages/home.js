import { animateHeroTitle, initScrollAnimations } from '../animations.js';

export function renderHome(container) {
  container.innerHTML = `
    <div class="home">
      <section class="hero" id="hero">
        <div class="hero-bg">
          <img src="/images/minusha-about.jpg" alt="Minusha Balasooriya - Cinematographer" class="parallax" data-speed="0.5" />
        </div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title" id="hero-title"></h1>
          <div class="hero-subtitle">Cinematographer</div>
          <div class="hero-line"></div>
          <p class="hero-tagline">Crafting visual stories through the lens.<br>Based in Negombo, Sri Lanka.</p>
        </div>
        <div class="scroll-indicator">
          <span class="scroll-indicator-text">Scroll</span>
          <span class="scroll-indicator-line"></span>
        </div>
      </section>

      <section class="featured-section">
        <div class="featured-header fade-in-up">
          <h2 class="featured-title">Selected Work</h2>
          <a href="/portfolio" class="featured-view-all">View All Projects</a>
        </div>
        <div class="featured-grid stagger-children">
          <div class="featured-card">
            <img src="/images/portfolio-1.png" alt="Athletics Meet" />
            <!--<div class="featured-card-overlay">
              <span class="featured-card-category">Trailer</span>
              <h3 class="featured-card-title">Athletics Meet</h3>
            </div>-->
          </div>
          <div class="featured-card">
            <img src="/images/portfolio-2.png" alt="Kataka Live in Concert" />
            <!--<div class="featured-card-overlay">
              <span class="featured-card-category">Highlight Reel</span>
              <h3 class="featured-card-title">Kataka Live in Concert</h3>
            </div>-->
          </div>
          <div class="featured-card">
            <img src="/images/portfolio-3.png" alt="NSBM Green Fiesta 2026" />
           <!--<div class="featured-card-overlay">
              <span class="featured-card-category">Artist Highlight Reel</span>
              <h3 class="featured-card-title">NSBM Green Fiesta 2026</h3>
            </div>-->
          </div>
        </div>
      </section>

    </div>
  `;

  // Animate hero title character by character
  const title = document.getElementById('hero-title');
  const name = 'MINUSHA BALASOORIYA';
  name.split('').forEach(char => {
    if (char === ' ') {
      title.innerHTML += '<span class="space"></span>';
    } else {
      title.innerHTML += `<span class="char">${char}</span>`;
    }
  });

  // Trigger hero animations after a short delay
  setTimeout(() => {
    const hero = document.getElementById('hero');
    hero.classList.add('loaded', 'animate');
    animateHeroTitle('#hero-title');
  }, 200);

  // Init scroll-triggered animations
  setTimeout(() => initScrollAnimations(), 500);
}
