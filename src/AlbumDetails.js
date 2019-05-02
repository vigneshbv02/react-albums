import React, { Component } from 'react';
import { render } from 'react-dom';
import FecthData from '../services/FetchData'
import axios from 'axios';
import PropTypes from 'prop-types';

export default class AlbumDetails extends Component {
  static propTypes = {
    album = PropTypes.object.isRequired
  } 

  constructor(props) {
    super(props);
  }

  render() {
    const album = this.props.album;
    console.log(album);
    return(
      <div>
      </div>
    );
  }
}
