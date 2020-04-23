class Directives {
  constructor(steps, directives) {
    this.directives = [];
    this.steps = steps;
    if (directives !== null) {
      this.directives = directives;

      //  Generate random directives if steps is larger than given directives
      this.randomizeAllDirectivesFrom(directives.length)
    }
    else {
      this.randomizeAllDirectivesFrom(0);
    }
  }

  //  Initialize random directives
  randomizeAllDirectivesFrom(startingStep) {
    for (var i = startingStep; i < this.steps; i++) {
      this.randomizeDirective(i);
    }
  }

  //  Create a random directive
  randomizeDirective(i) {
    //  Select a random value from 0 to 2pi
    var radians = Math.random() * Math.PI * 2;
    //  Then initialize 2D vector using trigonometry
    this.directives[i] = {
      'translateX': Math.cos(radians)
    , 'translateY': Math.sin(radians)
    };
  }
}
