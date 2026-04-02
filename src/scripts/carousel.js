import Swiper from 'swiper';
import 'swiper/css';

export function initCarousel() {
  const swiper = new Swiper('.cast__carousel', {
    // Configuração Padrão (Mobile First - Telas até 743px)
    slidesPerView: 2.5,
    spaceBetween: 16,
    grabCursor: true,

    // Responsividade baseada nos Breakpoints do Layout
    breakpoints: {
      // Tablet (A partir de 744px)
      744: {
        slidesPerView: 4.5,
        spaceBetween: 24,
      },
      // Desktop (A partir de 1024px)
      1024: {
        slidesPerView: 6.5,
        spaceBetween: 32,
      }
    }
  });
}