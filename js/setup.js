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
var template = document.querySelector('#similar-wizard-template')
.content.querySelector('.setup-similar-item');
var listNode = document.querySelector('.setup-similar-list');

document.querySelector('.setup').classList.remove('hidden');
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
  var wizardElement = template.cloneNode(true);
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
