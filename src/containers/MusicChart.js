import React, { Component } from 'react';

class MusicChart extends Component {
  constructor(props){
    super(props);
    this.state={
      songs: [],
    }
  }
  componentDidMount(){
    const url='http://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
      songs: data
    }))
    .catch(err => console.error());
  }
  render() {
    return(
      <h1>iTunes Store: Top Songs</h1>
    )
  }
}

export default MusicChart;
