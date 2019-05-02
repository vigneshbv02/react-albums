import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import MainContainer from './src/MainContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <MainContainer />
    );
  }
}

render(<App />, document.getElementById('root'));
