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
    , 'radian': radians
    };
  }

  //  Slightly a random directive
  mutateDirective(i) {
    //  Mutate radian by random value from -pi/4 to pi/4
    var mutation = Math.random() * Math.PI / 2 - Math.PI / 4;
    this.directives[i].radian += mutation;
    this.directives[i].translateX = Math.cos(
      this.directives[i].radian
    );
    this.directives[i].translateY = Math.sin(
      this.directives[i].radian
    );
  }

  //  Mutate some directives
  mutate() {
    var rand;
    for (var i = 0; i < this.steps; i++) {
      rand = Math.random();
      if (rand < SETTINGS.UNIT.mutate_rate) {
        this.mutateDirective(i);
      }
    }
  }
}
