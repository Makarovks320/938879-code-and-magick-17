'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var fileChooser = document.querySelector('.upload input[type=file]');
  var prewiev = document.querySelector('.setup-user-pic');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var filename = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (currentValue) {
      return filename.endsWith(currentValue);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        prewiev.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });

})();
