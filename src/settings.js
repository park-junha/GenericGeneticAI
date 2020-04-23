const SETTINGS = {
  'CANVAS': {
    'WIDTH': 600
  , 'HEIGHT': 600
  , 'COLOR': 'silver'
  }
, 'FRAMERATE': 60
, 'WALLWIDTH': 2
, 'GOALWIDTH': 10
, 'POPULATION_SIZE': 750
, 'UNIT': {
    'start': {
      'x': 200
    , 'y': 450
    }
  , 'speed': 8
  , 'size': {
      'width': 8
    , 'height': 8
    }
  , 'color': 'blue'
  , 'mutate_rate': 0.01
  }
};

const OBSTACLES = [
  //  Outer walls
  {
    'x': 0
  , 'y': 0
  , 'width': SETTINGS.CANVAS.WIDTH
  , 'height': SETTINGS.WALLWIDTH
  }
, {
    'x': 0
  , 'y': 0
  , 'width': SETTINGS.WALLWIDTH
  , 'height': SETTINGS.CANVAS.WIDTH
  }
, {
    'x': 0
  , 'y': SETTINGS.CANVAS.HEIGHT - SETTINGS.WALLWIDTH
  , 'width': SETTINGS.CANVAS.WIDTH
  , 'height': SETTINGS.WALLWIDTH
  }
, {
    'x': SETTINGS.CANVAS.WIDTH - SETTINGS.WALLWIDTH
  , 'y': 0
  , 'width': SETTINGS.WALLWIDTH
  , 'height': SETTINGS.CANVAS.WIDTH
  }

  //  Other obstacles
, {
    'x': 200
  , 'y': 360
  , 'width': 300
  , 'height': 20
  }
];

const GOAL = {
  'x': 225
, 'y': 30
, 'width': SETTINGS.GOALWIDTH
, 'height': SETTINGS.GOALWIDTH
}
