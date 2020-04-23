window.onload = function() {
  canv = document.getElementById('gameController');
  drawCanvas();

  startAi();
  setInterval(eventTick, 1000 / SETTINGS.FRAMERATE);
}

function drawCanvas() {
  canv.width = SETTINGS.CANVAS.WIDTH;
  canv.height = SETTINGS.CANVAS.HEIGHT;

  ctx = canv.getContext('2d');

  ctx.fillStyle = 'silver';
  ctx.fillRect(0, 0, canv.width, canv.height);

  drawObstacles();
  drawGoal();
}

function drawObstacles() {
  for (var obstacle of OBSTACLES) {
    renderObstacle(obstacle);
  }
}

function renderObstacle(obstacle) {
  ctx.fillStyle = 'red';
  ctx.fillRect(
    obstacle.x
  , obstacle.y
  , obstacle.width
  , obstacle.height
  );
}

function drawGoal() {
  ctx.fillStyle = 'green';
  ctx.fillRect(
    GOAL.x
  , GOAL.y
  , GOAL.width
  , GOAL.height
  );
}

function startAi() {
  population = new Population(SETTINGS.POPULATION_SIZE, SETTINGS.UNIT);
}

function eventTick() {
  population.takeNextSteps();
}
