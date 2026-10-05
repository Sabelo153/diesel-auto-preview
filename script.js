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
