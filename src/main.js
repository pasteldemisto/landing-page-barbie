import './styles/main.css';
import { initCarousel } from './scripts/carousel.js';
import initMenu from './scripts/menu.js';

// Garante que o JS só rode depois que o HTML estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initMenu();
});