import { initScrollAnimations, animateCounter } from '../animations.js';

export function renderAbout(container) {
  container.innerHTML = `
    <div class="about">
      <section class="about-hero">
        <div class="about-hero-image" id="about-image">
          <img src="/images/minusha-about.jpg" alt="Minusha Balasooriya" />
          <div class="about-monogram">MB</div>
        </div>
        <div class="about-hero-text">
          <span class="about-label fade-in-up">About Me</span>
          <h1 class="about-name fade-in-up">Minusha<br>Balasooriya</h1>
          <span class="about-title fade-in-up">Cinematographer & Filmmaker</span>
          <p class="about-bio fade-in-up">
            I'm a 19-year-old cinematographer based in Negombo, Sri Lanka. 
            My passion lies in visual storytelling - from music videos to short films, 
            I bring stories to life through carefully crafted camera work, dynamic compositions, 
            and cinematic color grading. Every frame is an opportunity to evoke emotion 
            and transport the audience into another world.
          </p>
          <p class="about-bio fade-in-up">
            With a keen eye for detail and a deep understanding of light, movement, 
            and emotion, I collaborate with artists and brands to create visuals 
            that leave a lasting impression. Whether it's the energy of a live performance 
            or the stillness of a dramatic moment, I capture it all.
          </p>
          <div class="about-social fade-in-up">
            <a href="https://www.instagram.com/minu.ex" target="_blank" class="about-social-link">Instagram</a>
            <!--<a href="https://youtube.com" target="_blank" class="about-social-link">YouTube</a>-->
            <!--<a href="https://behance.net" target="_blank" class="about-social-link">Behance</a>-->
          </div>
        </div>
      </section>

      <section class="skills-section">
        <span class="section-label fade-in-up">What I Do</span>
        <div class="skills-grid stagger-children">
          <div class="skill-card">
            <div class="skill-number">01</div>
            <h3 class="skill-title">Cinematography</h3>
            <p class="skill-desc">Professional camera operation and visual composition for music videos, commercials, and narrative films. Expertise in handheld, gimbal, and dolly work.</p>
          </div>
          <div class="skill-card">
            <div class="skill-number">02</div>
            <h3 class="skill-title">Color Grading</h3>
            <p class="skill-desc">Creating distinctive visual moods through professional color grading using DaVinci Resolve. From moody cinematic tones to vibrant commercial looks.</p>
          </div>
          <div class="skill-card">
            <div class="skill-number">03</div>
            <h3 class="skill-title">Video Editing</h3>
            <p class="skill-desc">Precise post-production editing with attention to rhythm, pacing, and narrative flow. Proficient in Adobe Premiere Pro and Final Cut Pro.</p>
          </div>
          <div class="skill-card">
            <div class="skill-number">04</div>
            <h3 class="skill-title">Direction</h3>
            <p class="skill-desc">Creative direction from concept to final delivery. Working closely with artists and clients to bring their vision to life with a cinematic touch.</p>
          </div>
          <div class="skill-card">
            <div class="skill-number">05</div>
            <h3 class="skill-title">VFX & Motion</h3>
            <p class="skill-desc">Visual effects compositing and motion graphics to enhance the visual narrative. Creating seamless effects that serve the story.</p>
          </div>
          <div class="skill-card">
            <div class="skill-number">06</div>
            <h3 class="skill-title">Sound Design</h3>
            <p class="skill-desc">Creating immersive audio landscapes that complement the visual experience. Sound mixing and design for film and video content.</p>
          </div>
        </div>
      </section>

      <section class="experience-section">
        <span class="section-label fade-in-up">By The Numbers</span>
        <div class="experience-grid stagger-children">
          <div class="stat-item">
            <div class="stat-number" data-target="15">0+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="3">0+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="10">0+</div>
            <div class="stat-label">Happy Clients</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="50">0+</div>
            <div class="stat-label">Videos Created</div>
          </div>
        </div>
      </section>
    </div>
  `;

  // Reveal about image
  setTimeout(() => {
    const aboutImage = document.getElementById('about-image');
    if (aboutImage) aboutImage.classList.add('revealed');
  }, 300);

  // Animate stat counters
  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll('.stat-number');
          statNumbers.forEach(el => {
            const target = parseInt(el.dataset.target);
            animateCounter(el, target, 1500);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const grid = document.querySelector('.experience-grid');
    if (grid) observer.observe(grid);
  }, 500);

  // Init scroll animations
  setTimeout(() => initScrollAnimations(), 500);
}
