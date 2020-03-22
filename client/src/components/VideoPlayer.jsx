import React from 'react';


const VideoPlayer = (props) => {
  return (
  <div id="movie-player" >
    <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.video.videoId } allowFullScreen width="800" height="380"></iframe>
  </div>
)};


export default VideoPlayer;
