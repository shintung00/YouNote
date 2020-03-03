import React from 'react';
import VideoListEntry from './VideoListEntry.jsx';

var VideoList = (props) => (
  <div className="video-list">
    {props.vids.map((video, i) =>
      <VideoListEntry key={i} video={video} open={true}/>
    )}
  </div>
);



export default VideoList;

