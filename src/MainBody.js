import React, { Component } from 'react';
import { render } from 'react-dom';
import AlbumDetails from './AlbumDetails';

export default class MainBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={'container-fluid'}>
        <AlbumDetails />
      </div>
    );
  }
}
