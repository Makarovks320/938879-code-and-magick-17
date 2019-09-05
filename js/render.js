'use strict';

(function () {

  var template = document.querySelector('#similar-wizard-template');
  var listNode = document.querySelector('.setup-similar-list');

  function createWizardElement(wizard) {
    var wizardElement = template.content.querySelector('.setup-similar-item').cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  }

  function displayWizards(localWizards) {
    while (listNode.firstChild) {
      listNode.removeChild(listNode.firstChild);
    }
    localWizards.slice(0, 4).forEach(function (wizardItem) {
      listNode.appendChild(createWizardElement(wizardItem));
    });
  }
  window.render = displayWizards;
})();
