import React from 'react';

class BootState {
  constructor(props) {
    this.props = props;
  }

  create() {
    console.log('Boot state started!');
    this.props.switchState('play');
  }
}

export default class Boot extends React.Component {
  componentWillMount() {
    this.props.game.state.add('boot', new BootState(this.props), true);
  }

  render() {
    return <p>Boot State</p>;
  }
}
