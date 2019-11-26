import React from 'react';
import './SongsList.css';

const SongsList = (props) => {
  const topSongs = props.songsList.map((song, index) => {
    const url = song["im:image"][0].label;
    return (
        <div className="main-container">
        <img src={url} alt="" height="80" width="80"></img>
      <div className="container" value={index} key={index}>
        <h3>Chart Position: {index+1}</h3>
        <h5><a href={song.link[0].attributes.href}>{song.title.label}</a></h5>
      </div>
      </div>
    )
  })
  return (
    <div>
        {topSongs}
    </div>
  )
}

export default SongsList;
