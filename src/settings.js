const SETTINGS = {
  'CANVAS': {
    'WIDTH': 600
  , 'HEIGHT': 600
  }
, 'FRAMERATE': 60
, 'WALLWIDTH': 2
, 'GOALWIDTH': 10
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
    'x': 100
  , 'y': 290
  , 'width': 400
  , 'height': 20
  }
];

const START = {
  'x': 300
, 'y': 550
}

const GOAL = {
  'x': 225
, 'y': 30
, 'width': SETTINGS.GOALWIDTH
, 'height': SETTINGS.GOALWIDTH
}
