export default function initMenu() {
  const btnMenu = document.querySelector('.header__menu-btn');
  const menuList = document.querySelector('#main-menu');
  const menuLinks = document.querySelectorAll('#main-menu a');

  // Verifica se os elementos existem antes de adicionar os event listeners
  if (!btnMenu || !menuList) return;

  // Alterna a visibilidade do menu
  function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    menuList.classList.toggle('is-open');
    btnMenu.classList.toggle('is-open');
    const isOpen = menuList.classList.contains('is-open');
    btnMenu.setAttribute('aria-expanded', isOpen);
  }

  // Fecha o menu quando um link é clicado
  function closeMenu() {
    menuList.classList.remove('is-open');
    btnMenu.classList.remove('is-open');
    btnMenu.setAttribute('aria-expanded', 'false');
  }

  btnMenu.addEventListener('click', toggleMenu);
  btnMenu.addEventListener('touchstart', toggleMenu);

  // Adiciona event listeners para fechar o menu ao clicar em um link
  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}