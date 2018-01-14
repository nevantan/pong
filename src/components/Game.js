import React from 'react';

import Boot from './states/Boot';
import Play, { PlayState } from './states/Play';

export default class Game extends React.Component {
  state = {
    gameState: null
  };

  componentWillMount = () => {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
    this.game.state.add('play', PlayState);

    this.switchState('boot');
  };

  switchState = (state) => {
    switch (state) {
      case 'boot':
        this.setState(() => ({
          gameState: <Boot game={this.game} switchState={this.switchState} />
        }));
        break;
      case 'play':
        this.setState(() => ({
          gameState: <Play game={this.game} switchState={this.switchState} />
        }));
        break;
    }
  };

  render() {
    return (
      <div>
        <div id="game" />
        {this.state.gameState}
        <p>Game Component</p>
      </div>
    );
  }
}
