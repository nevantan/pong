import React from 'react';

class PlayState {
  constructor(props) {
    this.props = props;
  }

  create() {
    console.log('Play state started!');
  }
}

export default class Play extends React.Component {
  componentWillMount() {
    this.props.game.state.add('play', new PlayState(this.props), true);
  }

  render() {
    return <p>Play State</p>;
  }
}
