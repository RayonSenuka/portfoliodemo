import { initScrollAnimations } from '../animations.js';

const projects = [
  {
    id: 1,
    title: 'Athletics meet',
    type: 'Trailer',
    artist: 'Minusha Balasooriya',
    role: 'Director, DOP, Editor & Colorist',
    year: '2026',
    thumbnail: '/images/portfolio-1.png',
    videoUrl: '/videos/video1.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DVxkwjrjmIV/?igsh=Zm16eWZ6M3JjMmM3',
    isLocalVideo: true,
    aspectRatio: '4/3',
    description: 'A dynamic reel showcasing cinematic visuals, carefully crafted from concept to final delivery with hand-drawn mood boards guiding every shot.',
    process: [
      {
        image: '/images/moodboard.jpeg',
        label: 'Mood Board & Sketches',
        desc: 'Hand-drawn storyboard sketches mapping out the key shots — spin motion, dramatic falls, flowing water elements, and crowd energy moments.'
      },
      {
        image: '/videos/videoex1.mp4',
        label: 'Production',
        desc: 'On-set filming with gimbal-stabilized camera work, practical lighting, and close collaboration with the talent to capture authentic energy.'
      },
      {
        image: '/images/portfolio-1.png',
        label: 'Post-Production',
        desc: 'Color grading, editing, and VFX compositing to bring the mood board vision to life with cinematic precision.'
      }
    ]
  },
  {
    id: 2,
    title: 'Kataka Live in Concert',
    type: 'Highlight Reel',
    artist: 'Live Performance',
    role: 'Editor & Colorist',
    year: '2024',
    thumbnail: '/images/portfolio-2.png',
    videoUrl: '/videos/video2.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DAa0J5tNE2u/?igsh=MWZoaG5wdnkzNXloeA==',
    isLocalVideo: true,
    aspectRatio: '9/16',
    description: 'A high-energy concert film capturing the raw emotion and explosive atmosphere of a live performance.',
    process: []
  },
  {
    id: 3,
    title: 'NSBM Green Fiesta 2026',
    type: 'Artist Highlight Reel',
    artist: 'Dhanith Sri',
    role: 'Cinematographer',
    year: '2026',
    thumbnail: '/images/portfolio-3.png',
    videoUrl: '/videos/video3.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DVkrk26E4Gv/?igsh=MXJ2c3RrYzg1NzE3cQ==',
    isLocalVideo: true,
    aspectRatio: '9/16',
    description: 'A contemplative short film exploring solitude and self-discovery, filmed entirely during the golden hour on the coast of Negombo.',
    process: [
      {
        image: '/images/3act.jpeg',
        label: 'Concept',
        desc: 'I structure my reels using the Three-Act Structure, applying a clear progression of setup, build, and payoff to create a cohesive and engaging flow. Each edit begins by establishing tone and capturing attention, then develops through controlled pacing and increasing intensity, and concludes with a strong visual and emotional impact.'
      }
    ]
  },
  {
    id: 4,
    title: 'NSBM Green Fiesta 2026',
    type: 'Artist Highlight Reel',
    artist: 'Wasthi',
    role: 'Cinematographer',
    year: '2026',
    thumbnail: '/images/portfolio-3.png',
    videoUrl: '/videos/video4.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DVtDumdkz9O/?igsh=enF0M28zczFnYXVh',
    isLocalVideo: true,
    aspectRatio: '9/16',
    description: 'A contemplative short film exploring solitude and self-discovery, filmed entirely during the golden hour on the coast of Negombo.',
    process: [
      {
        image: '/images/3act.jpeg',
        label: 'Concept',
        desc: 'I structure my reels using the Three-Act Structure, applying a clear progression of setup, build, and payoff to create a cohesive and engaging flow. Each edit begins by establishing tone and capturing attention, then develops through controlled pacing and increasing intensity, and concludes with a strong visual and emotional impact.'
      }
    ]
  },
  {
    id: 5,
    title: 'Hokandara Rap',
    type: 'Music Video',
    artist: 'Mishmack',
    role: 'Dop, Editor & Colorist',
    year: '2025',
    thumbnail: '/images/portfolio-1.png',
    videoUrl: '/videos/video5.mp4?v=2',
    instagramUrl: 'https://www.instagram.com/reel/DCHk8XSgGuY/?igsh=c3k4dXM3dGN5ZDNx',
    isLocalVideo: true,
    aspectRatio: '9/16',
    description: 'A dynamic visual sequence showcasing cinematic techniques and engaging storytelling.',
    process: [

      {
        image: '/images/dop1.jpeg',
        label: 'Sketch 1',
        desc: 'moodboard sketch setup, build, and payoff to create a cohesive and engaging flow.'
      },
      {
        image: '/images/dop2.jpeg',
        label: 'Sketch 2',
        desc: 'moodboard sketch setup, build, and payoff to create a cohesive and engaging flow.'
      },
      {
        image: '/images/dop3.jpeg',
        label: 'Sketch 3',
        desc: 'moodboard sketch setup, build, and payoff to create a cohesive and engaging flow.'
      }
    ]
  }
];

function createProjectHTML(project, index) {
  const processCards = project.process.map(p => {
    const isVideo = /\.(mp4|webm|mov)$/i.test(p.image);
    const mediaHTML = isVideo
      ? `<video src="${p.image}" muted loop playsinline autoplay preload="auto"></video>`
      : `<img src="${p.image}" alt="${p.label}" loading="lazy" />`;
    return `
    <div class="process-card">
      ${mediaHTML}
      <div class="process-card-text">
        <div class="process-card-label">${p.label}</div>
        <p class="process-card-desc">${p.desc}</p>
      </div>
    </div>
  `;
  }).join('');

  // Build visual section — local video or thumbnail
  const visualContent = project.isLocalVideo ? `
    <div class="project-thumbnail-frame scale-in">
      <video src="${project.videoUrl}" muted loop playsinline autoplay preload="auto"
        data-ratio="${project.aspectRatio || '16/9'}"
        style="cursor:none;">
      </video>
    </div>
  ` : `
    <div class="project-thumbnail-frame scale-in">
      <img src="${project.thumbnail}" alt="${project.title}" loading="lazy" />
    </div>
    <a href="${project.videoUrl}" target="_blank" class="project-play-btn" aria-label="Watch ${project.title}">
      <svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19" /></svg>
    </a>
  `;

  // Build links section
  let linksHTML = '';
  if (project.instagramUrl) {
    linksHTML += `
      <a href="${project.instagramUrl}" target="_blank" class="project-link">
        <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        Watch on Instagram
      </a>
    `;
  }
  if (!project.isLocalVideo) {
    linksHTML += `
      <a href="${project.videoUrl}" target="_blank" class="project-link">
        <svg viewBox="0 0 24 24"><path d="M23.5 6.2c-.3-1-1-1.7-2-2C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.5.5c-1 .3-1.8 1.1-2 2C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.7 2 2 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.5c1-.3 1.8-1.1 2-2 .5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z"/></svg>
        Watch on YouTube
      </a>
    `;
  }

  return `
    <article class="project-item" id="project-${project.id}">
      <div class="project-visual">
        ${visualContent}
      </div>
      <div class="project-details">
        <div class="project-number">${String(index + 1).padStart(2, '0')}</div>
        <div class="project-detail-row fade-in-up">
          <div class="project-detail-label">Project</div>
          <div class="project-detail-value">${project.title}</div>
        </div>
        <div class="project-detail-row fade-in-up">
          <div class="project-detail-label">Type</div>
          <div class="project-detail-value">${project.type}</div>
        </div>
        <div class="project-detail-row fade-in-up">
          <div class="project-detail-label">Artist / Client</div>
          <div class="project-detail-value">${project.artist}</div>
        </div>
        <div class="project-detail-row fade-in-up">
          <div class="project-detail-label">Role</div>
          <div class="project-detail-value">${project.role}</div>
        </div>
        <div class="project-detail-row fade-in-up">
          <div class="project-detail-label">Year</div>
          <div class="project-detail-value">${project.year}</div>
        </div>
        <div class="project-links fade-in-up">
          ${linksHTML}
        </div>
      </div>
      ${project.process && project.process.length > 0 ? `
      <button class="process-toggle" data-project="${project.id}" aria-expanded="false">
        <span class="process-toggle-icon">+</span>
        Behind the Scenes — Development Process
      </button>
      <div class="project-process" id="process-${project.id}">
        <div class="process-content">
          <h3 class="process-title">How It Was Made</h3>
          <p class="about-bio" style="margin-bottom: 2rem; max-width: 100%;">${project.description}</p>
          <div class="process-grid">
            ${processCards}
          </div>
        </div>
      </div>
      ` : ''}
    </article>
  `;
}

export function renderPortfolio(container) {
  const projectsHTML = projects.map((p, i) => createProjectHTML(p, i)).join('');

  container.innerHTML = `
    <div class="portfolio">
      <div class="portfolio-header">
        <h1 class="portfolio-title fade-in-up">Portfolio</h1>
        <p class="portfolio-subtitle fade-in-up">Selected Works & Projects</p>
      </div>
      <div class="project-list">
        ${projectsHTML}
      </div>

      <section class="bts-section">
        <div class="bts-header fade-in-up">
          <h2 class="bts-title">Behind the Scenes</h2>
          <p class="bts-subtitle">A glimpse into the creative process</p>
        </div>
        <div class="bts-grid stagger-children">
          <div class="bts-card">
            <img src="/images/bts1.jpg" alt="On Set" />
            <div class="bts-card-overlay">
              <span class="bts-card-label">On Set</span>
              <h3 class="bts-card-title">Maris Agni</h3>
            </div>
          </div>
          <div class="bts-card">
            <img src="/images/dop5.jpeg" alt="Thawa innako" />
            <div class="bts-card-overlay">
              <span class="bts-card-label">BTS reel</span>
              <h3 class="bts-card-title">Commercial</h3>
            </div>
          </div>
          <div class="bts-card">
            <img src="/images/hero2.jpg" alt="Storyboard" />
            <div class="bts-card-overlay">
              <span class="bts-card-label">DOP</span>
              <h3 class="bts-card-title">Green Fiesta 2026</h3>
            </div>
          </div>
          <div class="bts-card">
            <img src="/images/photo23.jpeg" alt="BTS" />
            <div class="bts-card-overlay">
              <span class="bts-card-label">BTS</span>
              <h3 class="bts-card-title">Videography</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  // Add process toggle listeners
  document.querySelectorAll('.process-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.dataset.project;
      const process = document.getElementById(`process-${projectId}`);
      const isOpen = process.classList.contains('open');

      // Close all other process sections
      document.querySelectorAll('.project-process.open').forEach(p => {
        p.classList.remove('open');
      });
      document.querySelectorAll('.process-toggle.active').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        process.classList.add('open');
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');

        // Smooth scroll to process section
        setTimeout(() => {
          process.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    });
  });

  // Init scroll animations
  setTimeout(() => initScrollAnimations(), 500);
}
