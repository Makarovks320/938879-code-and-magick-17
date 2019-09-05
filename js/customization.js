'use strict';

(function () {

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

  var setup = document.querySelector('.setup');

  var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var coatInput = setup.querySelector('input[name="coat-color"]');
  var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var eyesInput = setup.querySelector('input[name="eyes-color"]');
  var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');
  var fireballInput = setup.querySelector('input[name="fireball-color"]');

  window.customization = {
    onEyesChange: function () {},
    onCoatChange: function () {},
    coatColor: setupWizardCoat.style.fill,
    eyesColor: setupWizardEyes.style.fill
  };

  function getRandomInteger(max, min) {
    if (min === undefined) {
      min = 0;
    }
    return Math.round(Math.random() * (max - min) + min);
  }

  setupWizardCoat.addEventListener('click', function () {
    var newColor = COAT_COLORS[getRandomInteger(COAT_COLORS.length - 1)];
    setupWizardCoat.style.fill = coatInput.value = newColor;
    window.customization.onCoatChange(newColor);
  });

  setupWizardEyes.addEventListener('click', function () {
    var newColor = EYES_COLORS[getRandomInteger(EYES_COLORS.length - 1)];
    setupWizardEyes.style.fill = eyesInput.value = newColor;
    window.customization.onEyesChange(newColor);
  });

  setupWizardFireball.addEventListener('click', function () {
    var newColor = FIREBALL_COLORS[getRandomInteger(FIREBALL_COLORS.length - 1)];
    setupWizardFireball.style.background = fireballInput.value = newColor;
  });

})();
