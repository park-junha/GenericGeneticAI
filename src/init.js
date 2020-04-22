window.onload = function () {
  canv = document.getElementById('gameController');

  drawCanvas();
}

function drawCanvas () {
  canv.width = SETTINGS.CANVAS.WIDTH;
  canv.height = SETTINGS.CANVAS.HEIGHT;

  ctx = canv.getContext('2d');

  ctx.fillStyle = 'silver';
  ctx.fillRect(0, 0, canv.width, canv.height);

  drawObstacles();
  drawGoal();
}

function drawObstacles () {
  ctx.fillStyle = 'red';
  for (var eachObstacle of OBSTACLES) {
    ctx.fillRect(
      eachObstacle.x
    , eachObstacle.y
    , eachObstacle.width
    , eachObstacle.height
    );
  }
}

function drawGoal () {
  ctx.fillStyle = 'green';
  ctx.fillRect(
    GOAL.x
  , GOAL.y
  , GOAL.width
  , GOAL.height
  )
}
