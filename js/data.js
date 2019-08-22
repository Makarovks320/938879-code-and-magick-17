'use strict';

(function () {
  var wizards = [];

  function setWizards(newWizards) {
    wizards = newWizards;
  }

  function getWizards() {
    return wizards;
  }
  window.data = {
    getWizards: getWizards,
    setWizards: setWizards
  };
})();
