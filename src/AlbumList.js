import React, { Component } from 'react';
import { render } from 'react-dom';
import FecthData from '../services/FetchData'
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };

    axios.get("https://rallycoding.herokuapp.com/api/music_albums").then(
      response => {
        this.setState({
          albums : response.data
        });
      });
  }

  render() {
    const { albums } = this.state;
    return(
      <div>
      {albums.map(album => {
        return (
          <p>{album.title}</p>
        );
      })}
      </div>
    );
  }
}
