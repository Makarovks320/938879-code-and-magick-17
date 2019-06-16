'use strict';

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

document.querySelector('.setup').classList.remove('hidden');

var wizards = getRandomWizards(4); // генерирует массив из волшебников

var wizardElements = createWizardElements(wizards); // создает DOM-элементы с данными случайно сгенерированных волшебников

displayWizards(wizardElements); // показывает их в блоке .setup-similar-list

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
function createWizardElements(someArray) {
  var localWizardElements = [];
  var template = document.querySelector('#similar-wizard-template');
  for (var i = 0; i < someArray.length; i++) {
    var wizardElement = template.content.querySelector('.setup-similar-item').cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = someArray[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = someArray[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = someArray[i].eyesColor;
    localWizardElements[i] = wizardElement;
  }
  return localWizardElements;
}
function displayWizards(localWizardElements) {
  for (var i = 0; i < localWizardElements.length; i++) {
    document.querySelector('.setup-similar-list').appendChild(localWizardElements[i]);
  }
}
