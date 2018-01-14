import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/Game';

ReactDOM.render(<Game />, document.getElementById('app'));
