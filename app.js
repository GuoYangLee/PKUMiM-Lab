'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
const menuLabel = document.querySelector('.menu-label');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  menuLabel.textContent = open ? 'Close' : 'Menu';
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) setMenu(false);
});

const desktop = window.matchMedia('(min-width: 761px)');
desktop.addEventListener('change', event => { if (event.matches) setMenu(false); });

if ('IntersectionObserver' in window) {
  const links = Array.from(navigation.querySelectorAll('a[href^="#"]'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('section[id], footer[id]').forEach(section => observer.observe(section));
}
