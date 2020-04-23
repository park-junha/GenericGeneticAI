class Population {
  constructor(size, unitSettings) {
    this.units = [];
    this.steps = 500;
    for (var i = 0; i < size; i++) {
      this.units[i] = new Unit(unitSettings, this.steps);
    }
  }

  takeNextSteps() {
    for (var unit of this.units) {
      unit.takeNextStep();
    }
  }
}
