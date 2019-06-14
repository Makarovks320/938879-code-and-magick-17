'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var INDENT = 60;
var COL_WIDTH = 40;
var COL_HEIGHT = 150;
var SPACE_BETWEEN = 50;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

function getRandom(max, min) {
  return Math.random() * (max - min) + min;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', CLOUD_X + INDENT, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + INDENT, CLOUD_Y + GAP * 2 + FONT_GAP * 2);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var chartCoordinateX = CLOUD_X + INDENT + (COL_WIDTH + SPACE_BETWEEN) * i;
    var chartCoordinateY = CLOUD_Y + CLOUD_HEIGHT - FONT_GAP;
    ctx.fillText(players[i], chartCoordinateX, chartCoordinateY);
    ctx.fillText(Math.round(times[i]), chartCoordinateX, chartCoordinateY - GAP * 2 - (COL_HEIGHT * times[i]) / maxTime);
  }

  for (i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 139, ' + getRandom(0.1, 1) + ')';
    }
    ctx.fillRect(CLOUD_X + INDENT + (COL_WIDTH + SPACE_BETWEEN) * i, chartCoordinateY - FONT_GAP,
        COL_WIDTH, -(COL_HEIGHT * times[i]) / maxTime);
  }
};
