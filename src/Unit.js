class Unit {
  constructor(unitSettings, steps) {
    this.position = {
      'x': unitSettings.start.x
    , 'y': unitSettings.start.y
    };
    this.speed = unitSettings.speed;
    this.size = {
      'width': unitSettings.size.width
    , 'height': unitSettings.size.height
    };

    this.state = 'alive';

    this.directives = new Directives(steps, null);
    this.currentStep = 0;
    this.maxSteps = steps;

    this.drawUnit(SETTINGS.UNIT.color);
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
    if (this.state == 'dead') {
      return;
    }

    this.drawUnit(SETTINGS.CANVAS.COLOR, 1);

    this.position.x += this.speed * this.directives.directives[this.currentStep].translateX;
    this.position.y += this.speed * this.directives.directives[this.currentStep].translateY;
    this.currentStep++;

    this.drawUnit(SETTINGS.UNIT.color);

    if (this.currentStep >= this.maxSteps) {
      this.state = 'dead';
    }
  }
}
