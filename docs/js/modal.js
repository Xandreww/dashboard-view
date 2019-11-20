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
