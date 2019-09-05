'use strict';
(function () {

  var wizards = [];
  window.backend.load(successCallback, errorHandler);

  var coatColor = window.customization.coatColor;
  var eyesColor = 'black';

  window.customization.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.customization.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  function getRank(wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  function updateWizards() {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  }

  var adFormNode = document.querySelector('.setup-wizard-form');

  function successCallback(wizardsFromServer) {
    window.data.setWizards(wizardsFromServer);
    wizards = window.data.getWizards();
    window.render(wizards);
  }

  function errorHandler(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }
  adFormNode.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.send(new FormData(adFormNode), window.setup.closePopup, errorHandler);
  });

  window.similar = {
    updateWizards: updateWizards
  };
})();
