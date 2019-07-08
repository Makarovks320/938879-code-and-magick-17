'use strict';
(function () {

  var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var template = document.querySelector('#similar-wizard-template');
  var listNode = document.querySelector('.setup-similar-list');


  var wizards = getRandomWizards(4); // генерирует массив из волшебников
  displayWizards(wizards); // показывает их в блоке .setup-similar-list
  document.querySelector('.setup-similar').classList.remove('hidden');


  function getRandomInteger(max, min) {
    if (min === undefined) {
      min = 0;
    }
    return Math.round(Math.random() * (max - min) + min);
  }

  function getRandomWizards(wizardsCount) {
    var localWizards = [];
    for (var i = 0; i < wizardsCount; i++) {
      var wizard = {};
      wizard.name = NAMES[getRandomInteger(NAMES.length - 1)] + ' ' + SURNAMES[getRandomInteger(SURNAMES.length - 1)];
      wizard.coatColor = COAT_COLORS[getRandomInteger(COAT_COLORS.length - 1)];
      wizard.eyesColor = EYES_COLORS[getRandomInteger(EYES_COLORS.length - 1)];
      localWizards[i] = wizard;
    }
    return localWizards;
  }

  function createWizardElement(wizard) {
    var wizardElement = template.content.querySelector('.setup-similar-item').cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }

  function displayWizards(localWizards) {
    localWizards.forEach(function (wizardItem) {
      listNode.appendChild(createWizardElement(wizardItem));
    });
  }

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');

  var setupStartPosition = {
    top: setup.style.top,
    left: setup.style.left
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && document.activeElement !== setupUserName) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.style.top = setupStartPosition.top;
    setup.style.left = setupStartPosition.left;
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
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

  setupWizardCoat.addEventListener('click', function () {
    setupWizardCoat.style.fill = COAT_COLORS[getRandomInteger(COAT_COLORS.length - 1)];
  });

  setupWizardEyes.addEventListener('click', function () {
    setupWizardEyes.style.fill = EYES_COLORS[getRandomInteger(EYES_COLORS.length - 1)];
  });

  setupWizardFireball.addEventListener('click', function () {
    setupWizardFireball.style.background = FIREBALL_COLORS[getRandomInteger(FIREBALL_COLORS.length - 1)];
  });

})();
