class Population {
  constructor(size, unitSettings) {
    this.units = [];
    this.unitSettings = unitSettings;
    this.steps = 200;
    for (var i = 0; i < size; i++) {
      this.units[i] = new Unit(unitSettings, this.steps);
    }

    this.generation = 1;
  }

  takeNextSteps() {
    var allInactive = true;
    for (var unit of this.units) {
      if (unit.state === 'active') {
        allInactive = false;
        unit.takeNextStep();
      }
    }
    if (allInactive === true) {
      this.evolve();
    }
  }

  evolve() {
    this.generation++;
    console.log('Generation ' + this.generation);

    //  Incremental learning
    if (this.generation % 10 == 0) {
      this.incrementSteps();
    }

    drawCanvas();

    //  Determine best unit
    let performanceReport = this.determinePerformance();

    //  Replace population with new, better, stronger units
    this.units = this.evolvedGeneration(performanceReport);
  }

  incrementSteps() {
    this.steps += 50;
  }

  evolvedGeneration(report) {
    let newGeneration = [];
    var newParent;

    //  Best unit lives on to next generation
    newGeneration[0] = report.bestUnit
    newGeneration[0].reset();

    //  Clone the parent and then mutate them :'D
    //  Replace the remainder of the population with mutated clones
    for (var i = 1; i < this.units.length; i++) {
      newParent = this.selectParent(
        report.totalPerformanceScore
      , report.fitnessIndices
      );
      newParent.reset();
      var mutatedUnit = this.mutate(newParent);
      newGeneration.push(mutatedUnit);
    }

    return newGeneration;
  }

  //  Pick a random value from all possible performance indices
  //  Units with higher scores are more likely to be picked
  selectParent(rngCeiling, fitnessIndices) {
    let randomIndex = Math.random() * rngCeiling;
    for (var i = 0; i < this.units.length; i++) {
      if (randomIndex <= fitnessIndices[i]) {
        return this.units[i];
      }
    }

    //  Loop should never ever end before returning a value
    //  But in case it does, return a random unit
    console.log('Somehow a parent wasn\'t selected during evolution....');
    return this.units[Math.random() * this.units.length];
  }

  //  Mutate a unit
  mutate(unit) {
    var directives = unit.directives;
    var rand;
    for (var i = 0; i < directives.directives.length; i++) {
      rand = Math.random();
      if (rand < SETTINGS.UNIT.mutate_rate) {
        directives.randomizeDirective(i);
      }
    }

    return new Unit(this.unitSettings, this.steps, directives.directives);
  }

  //  Determine performance of population by unit
  determinePerformance() {
    let report = {
      fitnessIndices: []
    , bestUnit: null
    , totalPerformanceScore: 0
    }

    let bestPerformance = 0;
    var unitPerformance
      , distToGoal
      , distToGoalX
      , distToGoalY
    ;

    //  Calculate performance of each unit
    for (var unit of this.units) {
      //  Calculate performance
      if (unit.state === 'winner') {
        unitPerformance = 10000 / (unit.currentStep * unit.currentStep);
      }
      else {
        distToGoalX = Math.abs(unit.position.x - GOAL.x);
        distToGoalY = Math.abs(unit.position.y - GOAL.y);
        distToGoal = Math.sqrt(
          distToGoalX * distToGoalX
        + distToGoalY + distToGoalY
        );
        unitPerformance = 1 / (distToGoal * distToGoal);

        //  Reduce performance points if dead by collision
        unitPerformance *= Math.pow((unit.currentStep / unit.maxSteps), 3);
      }

      report.totalPerformanceScore += unitPerformance;
      report.fitnessIndices.push(report.totalPerformanceScore);

      //  Check if best performance among units
      if (unitPerformance > bestPerformance) {
        report.bestUnit = unit;
        bestPerformance = unitPerformance;
      }
    }
    console.log(report);
    return report;
  }

  
}
