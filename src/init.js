window.onload = function() {
  canv = document.getElementById('gameController');

  drawCanvas();
}

function drawCanvas() {
  setInterval(eventTick, 1000 / SETTINGS.FRAMERATE);

  canv.width = SETTINGS.CANVAS.WIDTH;
  canv.height = SETTINGS.CANVAS.HEIGHT;

  ctx = canv.getContext('2d');

  ctx.fillStyle = 'silver';
  ctx.fillRect(0, 0, canv.width, canv.height);

  drawObstacles();
  drawGoal();

  startAi();
}

function drawObstacles() {
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

function drawGoal() {
  ctx.fillStyle = 'green';
  ctx.fillRect(
    GOAL.x
  , GOAL.y
  , GOAL.width
  , GOAL.height
  )
}

function startAi() {
  population = new Population(SETTINGS.POPULATION_SIZE, SETTINGS.UNIT);
}

function eventTick() {
  population.takeNextSteps();
}
