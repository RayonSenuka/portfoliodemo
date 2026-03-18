// Simple hash-based SPA router
export class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentPage = null;
    
    window.addEventListener('hashchange', () => this.navigate());
    window.addEventListener('load', () => this.navigate());
  }
  
  navigate() {
    const hash = window.location.hash || '#/';
    const path = hash.replace('#', '') || '/';
    
    const route = this.routes.find(r => r.path === path) || this.routes[0];
    
    if (this.currentPage === route.path) return;
    this.currentPage = route.path;
    
    const app = document.getElementById('app');
    
    // Page exit animation
    app.classList.remove('page-transition-active');
    app.classList.add('page-transition-enter');
    
    setTimeout(() => {
      app.innerHTML = '';
      route.render(app);
      
      // Close nav overlay if open
      const overlay = document.getElementById('nav-overlay');
      const hamburger = document.getElementById('hamburger');
      if (overlay) overlay.classList.remove('open');
      if (hamburger) hamburger.classList.remove('active');
      
      // Scroll to top
      window.scrollTo(0, 0);
      
      // Page enter animation
      requestAnimationFrame(() => {
        app.classList.remove('page-transition-enter');
        app.classList.add('page-transition-active');
        
        // Fire custom event for page-specific animations
        window.dispatchEvent(new CustomEvent('pageRendered', { detail: { path } }));
      });
    }, 300);
  }
}
