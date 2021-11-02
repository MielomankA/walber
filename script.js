const header = document.querySelector('.header');
const games = document.getElementById('games');
const programms = document.getElementById('programms');
const download = document.getElementById('download');
const linkGames = document.querySelector('.link-games');
const linkProgramms = document.querySelector('.link-programms');
const linkDownload = document.querySelector('.link-download');
const links = document.querySelectorAll('.menu__link');
console.log(linkGames);

document.addEventListener('scroll', function () {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 769) {
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
  }

  if (window.pageYOffset >= 769 && window.pageYOffset <= 1200) {
    linkProgramms.classList.remove('link-active');
    linkDownload.classList.remove('link-active');
    linkGames.classList.add('link-active');
  }

  if (window.pageYOffset >= 1200 && window.pageYOffset <= 2500) {
    linkGames.classList.remove('link-active');
    linkDownload.classList.remove('link-active');
    linkProgramms.classList.add('link-active');
  }

  if (window.pageYOffset >= 2501) {
    linkGames.classList.remove('link-active');
    linkProgramms.classList.remove('link-active');
    linkDownload.classList.add('link-active');
  }
});

(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const menuCloseItem = document.querySelector('.menu__nav-close');
  const links = document.querySelectorAll('.menu__item');
  // const menu2 = document.querySelectorAll('.menu-none');

  burgerItem.addEventListener('click', () => {
    console.log('click');
    menu.classList.add('navigation_active');
    document.body.style.overflow = 'hidden';
    // menu2.classList.remove('navigation_active');
  });

  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('navigation_active');
  });

  for (const link of links) {
    link.addEventListener('click', () => {
      menu.classList.remove('navigation_active');
      document.body.style.overflow = 'visible';
    });
  }
})();
