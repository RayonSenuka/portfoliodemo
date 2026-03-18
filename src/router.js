// Simple History API SPA router
export class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentPage = null;
    
    // Listen to browser back/forward buttons
    window.addEventListener('popstate', () => this.navigate(window.location.pathname));
    
    // Initial load
    window.addEventListener('load', () => this.navigate(window.location.pathname));
    
    // Intercept all link clicks for internal navigation
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && link.href.startsWith(window.location.origin)) {
        // Skip if it opens in a new tab or is an external link
        if (link.target === '_blank' || link.getAttribute('rel') === 'external') return;
        
        // Skip if it has a download attribute
        if (link.hasAttribute('download')) return;

        e.preventDefault();
        const path = new URL(link.href).pathname;
        this.push(path);
      }
    });
  }
  
  push(path) {
    if (this.currentPage === path) return;
    window.history.pushState(null, '', path);
    this.navigate(path);
  }
  
  navigate(path = '/') {
    // If path is empty, default to '/'
    const currentPath = path || '/';
    
    const route = this.routes.find(r => r.path === currentPath) || this.routes[0];
    
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
        window.dispatchEvent(new CustomEvent('pageRendered', { detail: { path: currentPath } }));
      });
    }, 300);
  }
}
