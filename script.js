const toggle = document.querySelector('.menu-toggle');
const shell = document.querySelector('#navigation');
const navigation = shell.querySelector('nav');
const desktop = window.matchMedia('(min-width: 1100px)');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  shell.classList.toggle('is-open', open);
  shell.inert = !desktop.matches && !open;
}
function closeMenu() {
  setMenu(false);
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  setMenu(open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
desktop.addEventListener('change', closeMenu);
closeMenu();

// Animate once as content enters view; never hide content for reduced-motion users.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.hero-copy, .hero-photo, .page-banner > .container, .service-card, .photo-story, .photo-grid figure, .about > div, .contact-panel, .contact-help, .location-grid > div, .page-cta').forEach(element => {
    element.classList.add('reveal-ready');
    observer.observe(element);
  });
}
