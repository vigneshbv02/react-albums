import React, { Component } from 'react';
import { render } from 'react-dom';
import AlbumList from './AlbumList';

export default class MainBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={'container-fluid'}>
        <AlbumList />
      </div>
    );
  }
}
