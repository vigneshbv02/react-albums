import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import MainBody from './MainBody';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
        <MainBody />
      </div>
    );
  }
}
