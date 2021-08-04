

const toggleMenu = document.querySelector('.toggle-menu');

const toggleMenuItems = Array.from(document.querySelectorAll('.toggle-menu__item'));

const allhasFade = Array.from(document.querySelectorAll('.has-fade'));

const overflowLayer = document.querySelector('.header__overlay');

toggleMenu.addEventListener('click', function() {

  oepnMenu();
});

overflowLayer.addEventListener('click', function() {

  oepnMenu();
});

function oepnMenu() {
  if(toggleMenu.classList.contains('toggle-menu--active')) {
    toggleMenu.classList.remove('toggle-menu--active');

    toggleMenuItemActive('active');

    fadeStatus('visible');

    document.body.classList.remove('body--noscroll');
  }else {
    toggleMenu.classList.add('toggle-menu--active');

    toggleMenuItemActive('unactive');

    fadeStatus('unvisible');

    document.body.classList.add('body--noscroll');
  };
};

function toggleMenuItemActive(activeStatus) {
  toggleMenuItems.forEach(item => {
    if(activeStatus === 'active') {
      item.classList.remove('toggle-menu__item--active');
    }else { 
      item.classList.add('toggle-menu__item--active');
    };
  });
};

function fadeStatus(status) {
  allhasFade.forEach(element => {
    if(status === 'visible') {
      element.classList.add('has-fade');
      element.classList.remove('fade-in');
    }else {
      element.classList.remove('has-fade');
      element.classList.add('fade-in');
    };
  });
};