import React, { Component } from 'react';
import { render } from 'react-dom';
import FecthData from '../services/FetchData'

export default class AlbumDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    fetch("https://rallycoding.herokuapp.com/api/music_albums").then(
      response => {
        console.log(resposne.data);
        this.setState({
          albums : response.data
        });
      });
  }

  render() {
    return(
      <div className={'container-fluid'}>
        {this.state.albums}
      </div>
    );
  }
}
