'use strict';
(function () {

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  var Coordinates = function (x, y) {
    this.x = x;
    this.y = y;
  };

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = new Coordinates(evt.clientX, evt.clientY);

    var dragged = false;

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = new Coordinates(startCoords.x - moveEvt.clientX, startCoords.y - moveEvt.clientY);

      startCoords = new Coordinates(moveEvt.clientX, moveEvt.clientY);

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (e) {
          e.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


})();
