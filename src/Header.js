import React, { Component } from 'react';
import { render } from 'react-dom';
export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className={"navbar navbar-light bg-light"}>
        <a className={"navbar-brand"}>Albums</a>
      </nav>
    );
  }
}
