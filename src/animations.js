import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // Kill old triggers
  ScrollTrigger.getAll().forEach(t => t.kill());
  
  // Fade-in-up elements
  gsap.utils.toArray('.fade-in-up').forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });
  
  // Stagger children
  gsap.utils.toArray('.stagger-children').forEach(el => {
    const children = el.children;
    gsap.fromTo(children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
  });
  
  // Scale-in images
  gsap.utils.toArray('.scale-in').forEach(el => {
    gsap.fromTo(el,
      { scale: 1.15, opacity: 0.5 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // Parallax elements
  gsap.utils.toArray('.parallax').forEach(el => {
    const speed = el.dataset.speed || 0.3;
    gsap.to(el, {
      yPercent: -30 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  });

  // Line reveal  
  gsap.utils.toArray('.line-reveal').forEach(el => {
    gsap.fromTo(el,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // Slide from left
  gsap.utils.toArray('.slide-left').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // Slide from right
  gsap.utils.toArray('.slide-right').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });
}

export function animateHeroTitle(selector) {
  const chars = document.querySelectorAll(`${selector} .char`);
  chars.forEach((char, i) => {
    setTimeout(() => {
      char.style.opacity = '1';
      char.style.transform = 'translateY(0) rotateX(0)';
    }, 100 + i * 50);
  });
}

export function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const counter = () => {
    start += step;
    if (start >= target) {
      element.textContent = target + '+';
      return;
    }
    element.textContent = Math.floor(start) + '+';
    requestAnimationFrame(counter);
  };
  counter();
}
