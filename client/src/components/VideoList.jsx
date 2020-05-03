import React from 'react';
import VideoListEntry from './VideoListEntry.jsx';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
  height: 640px;
  justify-content: center;
`

const VideoList = (props) => (
  <Container>          
    {props.videos.map((video, i) => (
      <VideoListEntry videoID={i} video={video} selectVideo={props.selectVideo} name={video.name}/>)
    )}
  </Container>
)

export default VideoList;

// save={this.props.save} update={this.props.update}


//something is broken about this stateful component. probably can switch to stateless
