const SETTINGS = {
  'CANVAS': {
    'WIDTH': 600
  , 'HEIGHT': 600
  }
};

const WALLWIDTH = 2;
const OBSTACLES = [
  //  Outer walls
  {
    'x': 0
  , 'y': 0
  , 'width': SETTINGS.CANVAS.WIDTH
  , 'height': WALLWIDTH
  }
, {
    'x': 0
  , 'y': 0
  , 'width': WALLWIDTH
  , 'height': SETTINGS.CANVAS.WIDTH
  }
, {
    'x': 0
  , 'y': SETTINGS.CANVAS.HEIGHT - WALLWIDTH
  , 'width': SETTINGS.CANVAS.WIDTH
  , 'height': WALLWIDTH
  }
, {
    'x': SETTINGS.CANVAS.WIDTH - WALLWIDTH
  , 'y': 0
  , 'width': WALLWIDTH
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
