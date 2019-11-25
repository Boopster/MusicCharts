import React, { Component } from 'react';
import SongsList from '../components/SongsList'

class MusicChart extends Component {
  constructor(props){
    super(props);
    this.state={
      songsList: [],
    }
  }

  componentDidMount(){
    const url='http://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
    .then(res => res.json())
    .then(songsData => this.setState({
      songsList: songsData
    }))
    .catch(err => console.error());
  }

  render() {
    return(
      <div>
        <h1>iTunes Store: Top Songs</h1>
        <SongsList songsList={this.state.songsList}/>
      </div>
    )
  }
}

export default MusicChart;
