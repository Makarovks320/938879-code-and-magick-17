'use strict';

document.querySelector('.setup').classList.remove('hidden');

var NAMES = ['Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];
var SURNAMES = ['да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var EYES_COLORS = ['black',
  'red',
  'blue',
  'yellow',
  'green'];
var wizards = [];
for (var i = 0; i < 4; i++) {
  var wizard = {};
  wizard.name = NAMES[getRandomInteger(NAMES.length - 1, 0)] + ' ' + SURNAMES[getRandomInteger(SURNAMES.length - 1, 0)];
  wizard.coatColor = COAT_COLORS[getRandomInteger(COAT_COLORS.length - 1, 0)];
  wizard.eyesColor = EYES_COLORS[getRandomInteger(EYES_COLORS.length - 1, 0)];
  wizards[i] = wizard;
}

var template = document.querySelector('#similar-wizard-template');
for (i = 0; i < wizards.length; i++) {
  var wizardElement = template.content.querySelector('.setup-similar-item').cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  document.querySelector('.setup-similar-list').appendChild(wizardElement);
}
document.querySelector('.setup-similar').classList.remove('hidden');

function getRandomInteger(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}
