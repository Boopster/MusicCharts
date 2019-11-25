import React from 'react';

const SongsList = (props) => {
  const topSongs = props.songsList.map((song, index) => {
    return <li>Chart Position: {index+1} {song.title.label}</li>
  })
  return (
    <div>
      <ul>
        {topSongs}
      </ul>
    </div>
  )
}

export default SongsList;
