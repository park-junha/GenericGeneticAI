class Directives {
  constructor(steps, directives) {
    this.directives = [];
    this.steps = steps;
    if (directives !== null) {
      this.directives = directives;
    }
    else {
      this.randomizeDirectives(0);
    }
  }

  //  Initialize random directives
  randomizeDirectives(startingStep) {
    for (var i = startingStep; i < this.steps; i++) {
      //  Select a random value from 0 to 2pi
      var radians = Math.random() * Math.PI * 2
      //  Then initialize 2D vector using trigonometry
      this.directives[i] = {
        'translateX': Math.cos(radians)
      , 'translateY': Math.sin(radians)
      }
    }
  }
}
