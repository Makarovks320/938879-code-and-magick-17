'use strict';
(function () {

  document.querySelector('.setup-similar').classList.remove('hidden');

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');

  var setupStartPosition = {
    top: setup.style.top,
    left: setup.style.left
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  function onPopupEscPress(evt) {
    if (evt.keyCode === ESC_KEYCODE && document.activeElement !== setupUserName) {
      closePopup();
    }
  }

  function openPopup() {
    setup.classList.remove('hidden');
    window.similar.updateWizards();
    document.addEventListener('keydown', onPopupEscPress);
  }

  function closePopup() {
    setup.style.top = setupStartPosition.top;
    setup.style.left = setupStartPosition.left;
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }

  window.setup = {
    closePopup: closePopup
  };

})();
