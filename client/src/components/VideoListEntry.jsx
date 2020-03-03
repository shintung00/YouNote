import React from 'react';
import App from './App.jsx';

var VideoListEntry = (props) => {
  if (props.open) {
    return (
      <div>
        <App video={props.video}></App>
      </div>
    );
  } else {
    return (<div></div>)
  }
  
}

// VideoListEntry.propTypes = {
//   video: PropTypes.object.isRequired
// };

export default VideoListEntry;
