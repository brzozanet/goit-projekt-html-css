(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-franschise-open]'),
    closeModalBtn: document.querySelector('[data-modal-franschise-close]'),
    modal: document.querySelector('[data-modal-franschise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
