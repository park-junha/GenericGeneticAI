class Unit {
  constructor(unitSettings, steps, directives = null) {
    this.originalStart = {
      'x': unitSettings.start.x
    , 'y': unitSettings.start.y
    };
    this.originalSpeed = unitSettings.speed;
    this.size = {
      'width': unitSettings.size.width
    , 'height': unitSettings.size.height
    };

    this.maxSteps = steps;
    this.reset();

    this.directives = new Directives(steps, directives);
    this.drawUnit(SETTINGS.UNIT.color);
  }

  reset() {
    this.position = {
      'x': this.originalStart.x
    , 'y': this.originalStart.y
    };
    this.speed = this.originalSpeed;
    this.state = 'active';

    this.currentStep = 0;
  }

  drawUnit(color, offset = 0) {
    ctx.fillStyle = color;
    ctx.fillRect(
      this.position.x - offset
    , this.position.y - offset
    , this.size.width + offset * 2
    , this.size.height + offset * 2
    );
  }

  takeNextStep() {
    this.drawUnit(SETTINGS.CANVAS.COLOR, 1);

    this.position.x += this.speed * this.directives.directives[this.currentStep].translateX;
    this.position.y += this.speed * this.directives.directives[this.currentStep].translateY;
    this.currentStep++;

    this.checkState();

    if (this.currentStep >= this.maxSteps) {
      this.state = 'dead';
    }
  }

  checkState() {
    for (var obstacle of OBSTACLES) {
      var withinObstacleX = false;
      var withinObstacleY = false;
      if (
        this.position.x + this.size.width >= obstacle.x
        &&
        this.position.x <= obstacle.x + obstacle.width
      ) {
        withinObstacleX = true;
      }

      if (
        this.position.y + this.size.height >= obstacle.y
        &&
        this.position.y <= obstacle.y + obstacle.height
      ) {
        withinObstacleY = true;
      }

      if (withinObstacleX === true && withinObstacleY === true) {
        this.state = 'dead';
        renderObstacle(obstacle);
        return;
      }
    }

    var withinGoalX = false;
    var withinGoalY = false;
    if (
      this.position.x + this.size.width >= GOAL.x
      &&
      this.position.x <= GOAL.x + GOAL.width
    ) {
      withinGoalX = true;
    }

    if (
      this.position.y + this.size.height >= GOAL.y
      &&
      this.position.y <= GOAL.y + GOAL.height
    ) {
      withinGoalY = true;
    }

    if (withinGoalX === true && withinGoalY === true) {
      this.state = 'winner';
      drawGoal();
      return;
    }

    this.drawUnit(SETTINGS.UNIT.color);
  }
}
