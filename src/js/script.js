const hamburgerSidebarOn = document.getElementById('hamburger-sidebar-on');
const hamburgerSidebarOff = document.getElementById('hamburger-sidebar-off');
const sidebarOn = document.getElementById('sidebar-active');
const content = document.getElementById('content');
const sidebarOff = document.getElementById('sidebar-closed');
const nav = document.getElementById('nav');
const wrapper = document.getElementById('wrapper');
const sidebarNav = document.getElementById('sidebar-nav');

// console.log('nav:', nav);
// console.log('wrapper:', wrapper);
// console.log('sidebarNav:', sidebarNav);

const openSidebar = function() {
  sidebarOn.classList.add('sidebar-active');
  content.classList.add('content-to-right');
  sidebarOff.classList.remove('sidebar-hamburger-only');
};

const openSidebarOnMobile = function() {
  sidebarOn.classList.add('sidebar-active');
  sidebarOff.classList.remove('sidebar-hamburger-only');
};

const closeSidebar = function() {
  sidebarOn.classList.remove('sidebar-active');
  content.classList.remove('content-to-right');
  sidebarOff.classList.add('sidebar-hamburger-only');
};

const closeSidebarOnMobile = function() {
  sidebarOn.classList.remove('sidebar-active');
  sidebarOff.classList.add('sidebar-hamburger-only');
};

const closeNav = function() {
  nav.classList.add('hide');
  wrapper.classList.add('remove-padding-top-on-wrapper');
  sidebarNav.classList.remove('hide');
};

const openNav = function() {
  nav.classList.remove('hide');
  wrapper.classList.remove('remove-padding-top-on-wrapper');
  sidebarNav.classList.add('hide');
};

const adjustNavsForMobile = function() {
  if (window.innerWidth <= 768) {
    closeSidebar();
    closeNav();
  }
};

adjustNavsForMobile();

window.addEventListener('resize', function() {
  if (window.innerWidth <= 768) {
    closeSidebar();
    closeNav();
  } else {
    openSidebar();
    openNav();
  }
});

hamburgerSidebarOn.addEventListener('click', function() {
  if (window.innerWidth <= 768) {
    closeSidebarOnMobile();
  } else {
    closeSidebar();
  }
});
hamburgerSidebarOff.addEventListener('click', function() {
  if (window.innerWidth <= 768) {
    openSidebarOnMobile();
  } else {
    openSidebar();
  }
});

/* modal */
// add function that closes modal be removing .show class from overlay
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

// attach it to closing buttons
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

// close modal by clicking on background
document.querySelector('#overlay').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

// close modal by clicking escape
document.addEventListener('keyup', function(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

// opening modal is by closing all modals inside overlay
// and then opening specyfic modal and overlay

// eslint-disable-next-line no-unused-vars
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}
