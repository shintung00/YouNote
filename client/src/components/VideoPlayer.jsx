import React from 'react';


var VideoPlayer = (props) => (
  <div className="video-player">
    <h4>{props.video.snippet.title}</h4>
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.video.id.videoId } allowFullScreen height="450" width="900"></iframe>
    </div>
    <div className="video-player-details">

      {/* <div>{props.video.snippet.description}</div> */}
    </div>
  </div>
);


export default VideoPlayer;
