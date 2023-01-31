(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-buynow-open]'),
    closeModalBtn: document.querySelector('[data-modal-buynow-close]'),
    modal: document.querySelector('[data-modal-buynow]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
